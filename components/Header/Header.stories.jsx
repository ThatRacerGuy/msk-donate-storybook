import React from 'react';

import { Header } from './Header';
import * as HeaderMenu from '../HeaderMenu/HeaderMenu.stories';

export default {
  title: 'Organisms/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: HeaderMenu.Default.args.links,
  displayMenu: false,
};
Default.parameters = {
  layout: 'fullscreen',
};

export const MenuVisible = Template.bind({});
MenuVisible.args = {
  links: HeaderMenu.Default.args.links,
  displayMenu: true,
};
MenuVisible.parameters = {
  layout: 'fullscreen',
};
