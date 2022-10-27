import React from 'react';
import { Story, Meta, addDecorator } from '@storybook/react';
// import { withThemesProvider } from 'storybook-addon-styled-component-theme';
// import { ThemeProvider } from 'styled-components';

import '../../src/assets/styles/giving.css';

// const themes = [giving, kids];
// addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
    },
  },
};
