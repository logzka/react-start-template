import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
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
import {
  UserCircleIcon,
  ShoppingCartIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { Login } from '../login/Login';

const HomeTranslated = () => {
  const { setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);

  const { i18n, t } = useTranslation('common');

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
        <NavLink to={'/'}>
          <Logo />
        </NavLink>
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
            <Login />
          </div>
        </div>
      </Header>

      <main className="main">
        <Outlet />
      </main>
    </Layout>
  );
};

export default HomeTranslated;
