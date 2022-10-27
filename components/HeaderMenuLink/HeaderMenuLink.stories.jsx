import React from 'react';

import { HeaderMenuLink } from './HeaderMenuLink';
import headerMenu from '../data/headerMenu';

export default {
  title: 'Atoms/Links/Header Menu Link',
  component: HeaderMenuLink,
};

const Template = (args) => <HeaderMenuLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  link: headerMenu[0],
};

export const Active = Template.bind({});
Active.args = {
  link: headerMenu[1],
};

export const Donation = Template.bind({});
Donation.args = {
  link: headerMenu[5],
};
