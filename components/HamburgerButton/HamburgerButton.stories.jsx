import React from 'react';

import { HamburgerButton } from './HamburgerButton';

export default {
  title: 'Atoms/Buttons/Hamburger Menu Button',
  component: HamburgerButton,
};

const Template = (args) => <HamburgerButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Open Header Menu',
};

export const Close = Template.bind({});
Close.args = {
  label: 'Close Header Menu',
  open: false,
};
