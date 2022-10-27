import React from 'react';

import { FormButton } from './FormButton';

export default {
  title: 'Atoms/Form/Form Button',
  component: FormButton,
};

const Template = (args) => <FormButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Input',
};

export const DarkBg = Template.bind({});
DarkBg.args = {
  label: 'Input (Dark Bg)',
  bg: 'dark',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
