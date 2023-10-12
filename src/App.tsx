import React, { useContext } from 'react';
import './styles/app.scss';

/** Contexts */
import { ThemeContext, ThemeContextProvider } from './contexts/theme.context';

/** Components */
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import Logo from './components/logo/Logo';
import Card from './components/card/Card';
import Page from './components/page/Page';
import CartItem from './components/cart-item/CartItem';
import ModalWrapper from './components/modal-wrapper/ModalWrapper';
import Switch from './components/switch/Switch';

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    const body = document.getElementsByTagName('body')[0];
    if (!body) return;

    // true -> dark; false -> light
    const thm = e.target.checked ? 'dark' : 'light';
    const color = e.target.checked ? '#212121' : '#f7f2eb';

    // body.style.setProperty('--main-font-color', color);
    body.style.setProperty('--main-background-color', color);

    setTheme(thm);
  };

  return (
    <div className="app">
      <ThemeContextProvider>
        <Layout>
          <Header>
            <Logo />
            <Switch onChange={(e) => changeTheme(e)}/>
          </Header>

          <main className='main'>
            <ModalWrapper />

            <Card
              type='default'
              categoryName='Торты'
              name='Малиновый чизкейк'
              price='1299'
              priceOld='1300'
              description='Популярный десерт с сырной основой и тонким коржом из песочного теста с добавлением малинового пюре. Нежное творожное суфле, дополненное тонкой бисквитной прослойкой, прекрасное сочетание для любителей классики. В составе только натуральные молочные продукты. Без добавления растительных жиров.'
              imageUrl='https://shop-cdn1-2.vigbo.tech/shops/218522/products/21922955/images/3-9b48c64af285a36ca7de4fbc2d490de1.jpg'
            >hello</Card>

            <Page
              categoryName='Торты'
              name='Малиновый чизкейк'
              price='1299'
              priceOld='1300'
              description='Популярный десерт с сырной основой и тонким коржом из песочного теста с добавлением малинового пюре. Нежное творожное суфле, дополненное тонкой бисквитной прослойкой, прекрасное сочетание для любителей классики. В составе только натуральные молочные продукты. Без добавления растительных жиров.'
              imageUrls={[
                  'https://shop-cdn1-2.vigbo.tech/shops/218522/products/21922955/images/3-9b48c64af285a36ca7de4fbc2d490de1.jpg',
                  'https://img-global.cpcdn.com/recipes/c20bf426bb01ed71/1200x630cq70/photo.jpg',
                  'http://klublady.ru/uploads/posts/2022-02/1644810232_3-klublady-ru-p-chizkeik-s-malinoi-foto-3.jpg',
                  'https://i.pinimg.com/736x/b7/e8/6d/b7e86d1b37bd200913b51207df06476e.jpg',
              ]}
            ></Page>

            <CartItem
              categoryName='Торты'
              name='Малиновый чизкейк'
              price='1299'
              priceOld='1300'
              description='Популярный десерт с сырной основой и тонким коржом из песочного теста с добавлением малинового пюре. Нежное творожное суфле, дополненное тонкой бисквитной прослойкой, прекрасное сочетание для любителей классики. В составе только натуральные молочные продукты. Без добавления растительных жиров.'
              imageUrls={[
                  'https://shop-cdn1-2.vigbo.tech/shops/218522/products/21922955/images/3-9b48c64af285a36ca7de4fbc2d490de1.jpg',
              ]}
            />
          </main>
        </Layout>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
