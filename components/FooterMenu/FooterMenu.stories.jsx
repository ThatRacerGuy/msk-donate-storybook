import React from 'react';

import { FooterMenu } from './FooterMenu';
import footerLinks from '../data/footerMenu';

export default {
  title: 'Molecules/Footer Menu',
  component: FooterMenu,
};

const Template = (args) => <FooterMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  menu: {
    links: footerLinks.slice(0, 3),
    title: 'Connect',
  },
};
