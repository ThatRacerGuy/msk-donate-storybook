// .storybook/msk.js

import { create } from '@storybook/theming';
import Logo from '../src/assets/logos/msk--medium-navy.svg';

export default create({
  base: 'light',
  brandTitle: 'MSK Giving Storybook',
  brandImage: Logo,
  brandTarget: '_self',
});
