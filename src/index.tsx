import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_reset.scss';
import './styles/index.scss';
import './styles/_variables.scss';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

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

/** https://www.apollographql.com/docs/react/data/queries */
const client = new ApolloClient({
  uri: 'https://otus-graphql.beelzebub.uk/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      ProductsResponse: {
        keyFields: [],
        fields: {
          data: {
            keyArgs: false,
            merge(existing = [], incoming, { variables }) {
              // const { pageNumber, pageSize } = variables;
              // console.log('=== MERGING ===');
              // console.log('vars', variables);
              // console.log('inc', incoming);
              // console.log('exist', existing);

              // const merged = existing ? existing.slice(0) : [];

              // const offset = (pageNumber - 1) * pageSize;
              // for (let i = 0; i < incoming.length; ++i) {
              //   merged[offset + i] = incoming[i];
              // }

              // console.log('merged', merged);
              // return merged;

              return [...existing, ...incoming];
            },

            // read(existing, { variables: { pageNumber, pageSize } }) {
            //   // console.log('=== READING ===');
            //   const offset = (pageNumber - 1) * pageSize;
            //   const limit = pageSize;

            //   // console.log('read existing', { offset, limit, existing });
            //   // console.log('return', existing && existing.slice(offset, offset + limit));

            //   return existing && existing.slice(offset, offset + limit);
            // },
          },
        },
      },
      ProductQueries: {
        keyFields: [],
      },
    },
  }),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <I18nextProvider i18n={i18next} defaultNS={'common'}>
          <BrowserRouter basename={'/'}>
            <ThemeContextProvider>
              <LangContextProvider>
                <App />
              </LangContextProvider>
            </ThemeContextProvider>
          </BrowserRouter>
        </I18nextProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
