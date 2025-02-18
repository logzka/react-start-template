import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_reset.scss';
import './styles/index.scss';
import './styles/_variables.scss';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

/** Initializer */
import { Initializer } from './redux/initializer/Initializer';

/** Contexts */
import { LangContextProvider } from './contexts/lang.context';
import { ThemeContextProvider } from './contexts/theme.context';

/** Router */
import { BrowserRouter } from 'react-router-dom';

/** Translations */
import { I18nextProvider } from 'react-i18next';
// TODO: понять, на что ругалось TOptions not found in 'i18next'
// eslint-disable-next-line import/named
import i18next, { TOptions } from 'i18next';
import common_en from './translations/en/common.json';
import common_ru from './translations/ru/common.json';

i18next.init<TOptions>({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'ru', // language to use
  react: { useSuspense: false },
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    ru: {
      common: common_ru,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next} defaultNS={'common'}>
        <BrowserRouter basename={'/'}>
          <Initializer />
          <ThemeContextProvider>
            <LangContextProvider>
              <App />
            </LangContextProvider>
          </ThemeContextProvider>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
