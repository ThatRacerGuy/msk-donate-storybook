import React from 'react';

import { Input } from './Input';

export default {
  title: 'Atoms/Form/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Text Input',
};

export const Rounded = Template.bind({});
Rounded.args = {
  placeholder: 'Text Input',
  rounded: true,
};

export const DarkBg = Template.bind({});
DarkBg.args = {
  placeholder: 'Text Input',
  bg: 'dark',
};

export const Large = Template.bind({});
Large.args = {
  placeholder: 'Text Input',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  placeholder: 'Text Input',
  size: 'small',
};
