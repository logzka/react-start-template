import type { Preview } from '@storybook/react';

import i18n from './i18next';

const preview: Preview = {
  parameters: {
    i18n,
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globals: {
    locale: 'ru',
    locales: {
      en: { title: 'English', left: '🇺🇸' },
      ru: { title: 'Russian', left: '🇷🇺' },
    },
  },
};

export default preview;
