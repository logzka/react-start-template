// Загрузить категории и продукты

// 0. регистрация, в случае ошибки - логин
// 1. создание категорий с нужными идентификаторами
// 2. создание товаров

// eslint-disable-next-line import/default
import pkg from '@apollo/client';
const { ApolloClient, InMemoryCache, gql } = pkg;
// import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// import { cakes } from '../api/cakes';

const server_url = 'https://otus-graphql.beelzebub.uk/graphql';
const auth = { email: 'test@cake.shop', password: 'C@K3S-|_0v3R' };

const categories = [
  { value: 'cake', name: 'Торты' },
  { value: 'pie', name: 'Пироги' },
  { value: 'dessert', name: 'Десерты' },
];

export const cakes: any = [
  {
    category: { value: 'cake', name: 'Торты' },
    name: 'Малиновый чизкейк',
    price: '1299',
    priceOld: '1300',
    description:
      'Популярный десерт с сырной основой и тонким коржом из песочного теста с добавлением малинового пюре. Нежное творожное суфле, дополненное тонкой бисквитной прослойкой, прекрасное сочетание для любителей классики. В составе только натуральные молочные продукты. Без добавления растительных жиров.',
    imageUrl:
      'https://shop-cdn1-2.vigbo.tech/shops/218522/products/21922955/images/3-9b48c64af285a36ca7de4fbc2d490de1.jpg',
  },
  {
    category: { value: 'dessert', name: 'Десерты' },
    name: 'Брауни',
    price: '2399',
    priceOld: '2700',
    description:
      'шоколадное пирожное характерного коричневого цвета (англ. brown — «коричневый»; отсюда и название), прямоугольные куски нарезанного шоколадного пирога. Традиционно для американской кухни. В зависимости от рецепта, может иметь консистенцию торта, кекса или печенья.',
    imageUrl:
      'https://mykaleidoscope.ru/x/uploads/posts/2023-05/1684858638_mykaleidoscope-ru-p-avstriiskii-shokoladnii-tort-instagram-68.jpg',
  },
  {
    category: { value: 'cake', name: 'Торты' },
    name: 'Медовик',
    price: '999',
    priceOld: '1000',
    description:
      'Торт, распространённый в России и странах бывшего СССР. Состоит из трёх медовых коржей с прослойкой из сметанного крема.',
    imageUrl:
      'https://mykaleidoscope.ru/uploads/posts/2021-09/1632821160_26-mykaleidoscope-ru-p-medovik-tvorozhnii-krasivo-foto-37.jpg',
  },
];

const client = (headers?: any) =>
  new ApolloClient({
    uri: server_url,
    cache: new InMemoryCache(),
    headers: headers,
  });

const LOGIN = gql`
  mutation Signin($email: String!, $password: String!) {
    profile {
      signin(email: $email, password: $password) {
        token
      }
    }
  }
`;

const REGISTER = gql`
  mutation Signup($email: String!, $password: String!) {
    profile {
      signup(email: $email, password: $password, commandId: "Не нужно") {
        token
      }
    }
  }
`;

const CREATE_CATEGORY = gql`
  mutation Add($input: CategoryAddInput!) {
    categories {
      add(input: $input) {
        id
        name
        value
      }
    }
  }
`;

const GET_CATEGORIES = gql`
  query Query {
    categories {
      getMany {
        data {
          id
          name
          value
        }
      }
    }
  }
`;

const CREATE_CAKE = gql`
  mutation Products($input: ProductAddInput!) {
    products {
      add(input: $input) {
        id
      }
    }
  }
`;

const UPDATE_CAKE = gql`
  mutation Patch($patchId: ID!, $input: ProductUpdateInput!) {
    products {
      patch(id: $patchId, input: $input) {
        id
      }
    }
  }
`;

const login = async (auth: any) => {
  const apollo = client();

  let token = '';
  try {
    const { data } = await apollo.mutate({
      mutation: REGISTER,
      variables: auth,
    });
    token = data.profile.signup.token;
  } catch (error) {
    console.error('Error creating user:', error.message);

    // Не получилось зарегаться, значит логинимся
    const { data } = await apollo.mutate({
      mutation: LOGIN,
      variables: auth,
    });
    token = data.profile.signin.token;
  }

  return token;
};

const create_category = async (category: any, client: pkg.ApolloClient<pkg.NormalizedCacheObject>) => {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_CATEGORY,
      variables: { input: category },
    });
  } catch (error) {
    console.error(`err adding ${category.name}`);
  }
};

const get_categories = async (client: pkg.ApolloClient<pkg.NormalizedCacheObject>) => {
  const { data } = await client.mutate({
    mutation: GET_CATEGORIES,
  });

  return data.categories.getMany.data;
};

const randomIntNumber = (maxPrice = 10000) => Math.round(Math.random() * maxPrice);

const create_product = async (cake: any, client: pkg.ApolloClient<pkg.NormalizedCacheObject>) => {
  const { category: categoryId, name, description: desc, imageUrl: photo } = cake;

  // Сначала создаем
  const { data } = await client.mutate({
    mutation: CREATE_CAKE,
    variables: { input: { categoryId, desc, name, photo, price: randomIntNumber() } },
  });

  const product_id = data.products.add.id;

  // Потом обновляем старую цену
  await client.mutate({
    mutation: UPDATE_CAKE,
    variables: { input: { oldPrice: randomIntNumber(100000) }, patchId: product_id },
  });

  console.log(product_id);
};

async function fillDatabase() {
  // Получаем токен
  const token = await login(auth);
  console.log('token:', token);

  const apollo = client({ authorization: 'Bearer ' + token });

  // Создаем все категории
  categories.forEach(async (cat) => {
    await create_category(cat, apollo);
  });

  // Получаем идентификаторы категорий
  const db_cats = await get_categories(apollo);

  // Печем пироги
  cakes.forEach(async (cake: any) => {
    const category_id = db_cats.find((cat: any) => cat.value === cake.category.value).id;
    await create_product({ ...cake, category: category_id }, apollo);
  });

  console.log('DONE');
}

fillDatabase();
