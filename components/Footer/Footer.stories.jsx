import React from 'react';

import { Footer } from './Footer';
import * as FooterMenu from '../FooterMenu/FooterMenu.stories';
import footerLinks from '../data/footerMenu';

export default {
  title: 'Organisms/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  menus: {
    menu1: FooterMenu.Default.args.menu,
    menu2: {
      links: footerLinks.slice(3, 5),
      title: 'Learn More',
    },
  }
};
