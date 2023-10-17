import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/app.scss';

/** Contexts */
import { ThemeContext } from './contexts/theme.context';
import { LangContext, TLang } from './contexts/lang.context';

/** Components */
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import Logo from './components/logo/Logo';
// import Page from './components/page/Page';
// import CartItem from './components/cart-item/CartItem';
import ModalWrapper from './components/modal-wrapper/ModalWrapper';
import Switch from './components/switch/Switch';
import Button from './components/button/Button';
import List from './components/List';

const App = () => {
  const { setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  const { i18n }: any = useTranslation('common');

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const body = document.getElementsByTagName('body')[0];
    if (!body) return;

    // true -> dark; false -> light
    const thm = e.target.checked ? 'dark' : 'light';
    const color = e.target.checked ? '#212121' : '#f7f2eb';

    // body.style.setProperty('--main-font-color', color);
    body.style.setProperty('--main-background-color', color);

    setTheme(thm);
  };

  const changeLang = (lng: TLang): void => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <div className="app">
          <Layout>
            <Header>
              <Logo />
              <div className='app--header__actions'>
                <div style={{marginRight: '2em'}}>
                  <Button icon active={lang === 'ru'} onClick={() => changeLang('ru')}>Ru</Button>
                  <Button icon active={lang === 'en'} onClick={() => changeLang('en')}>En</Button>
                </div>
                <Switch onChange={(e) => changeTheme(e)}/>
              </div>
            </Header>

            <main className='main'>
              <ModalWrapper />

              <List />

              {/* <Page
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
              />

              <CartItem
                categoryName='Торты'
                name='Малиновый чизкейк'
                price='1299'
                priceOld='1300'
                description='Популярный десерт с сырной основой и тонким коржом из песочного теста с добавлением малинового пюре. Нежное творожное суфле, дополненное тонкой бисквитной прослойкой, прекрасное сочетание для любителей классики. В составе только натуральные молочные продукты. Без добавления растительных жиров.'
                imageUrls={[
                    'https://shop-cdn1-2.vigbo.tech/shops/218522/products/21922955/images/3-9b48c64af285a36ca7de4fbc2d490de1.jpg',
                ]}
              /> */}
            </main>
          </Layout>
    </div>
  );
};

export default App;
