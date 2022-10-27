import React from 'react';

import { HeaderMenu } from './HeaderMenu';
import headerMenu from '../data/headerMenu';

export default {
  title: 'Molecules/Header Menu',
  component: HeaderMenu,
};

const Template = (args) => <HeaderMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: headerMenu,
};
