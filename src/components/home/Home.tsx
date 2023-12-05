import React, { ReactNode, useContext } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { Outlet, NavLink } from 'react-router-dom';

/** Contexts */
import { ThemeContext } from '../../contexts/theme.context';
import { LangContext, TLang } from '../../contexts/lang.context';

/** Components */
import Layout from '../layout/Layout';
import Header from '../header/Header';
import Logo from '../logo/Logo';
// import Page from '../page/Page';
import Switch from '../switch/Switch';
import Button from '../button/Button';
import Navigation from '../navigation/Navigation';

/** Icons */
import { UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

const Home = ({ t }: { t?: (v: string) => ReactNode | string }) => {
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
    <Layout>
      <Header>
        <Logo />
        <Navigation />
        <div className="app--header__actions">
          <div>
            <Button icon active={lang === 'ru'} onClick={() => changeLang('ru')}>
              {t('ru')}
            </Button>
            <Button icon active={lang === 'en'} onClick={() => changeLang('en')}>
              {t('en')}
            </Button>
          </div>
          <Switch onChange={(e) => changeTheme(e)} />
          <div className="app--header__actions-icons">
            <NavLink to={'/cart'}>
              <ShoppingCartIcon className="app--header__actions-icon" />
            </NavLink>
            <NavLink to={'/profile'}>
              <UserCircleIcon className="app--header__actions-icon" />
            </NavLink>
          </div>
        </div>
      </Header>

      <main className="main">
        <Outlet />

        {/* <Page
          category={{ value: 'cake', name: 'Торты' }}
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
        /> */}
      </main>
    </Layout>
  );
};

const HomeTranslated = withTranslation('common')(Home);
export default HomeTranslated;
