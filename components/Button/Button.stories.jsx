import React from 'react';

import { Button } from './Button';

export default {
  title: 'Atoms/Buttons/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  classes: 'button--primary'
};

export const PrimaryReverse = Template.bind({});
PrimaryReverse.args = {
  label: 'Primary Button (Reverse)',
  classes: 'button--primary-reverse'
};

export const PrimaryTransparent = Template.bind({});
PrimaryTransparent.args = {
  label: 'Primary Button (Transparent)',
  classes: 'button--primary-transparent'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  classes: 'button--secondary'
};

export const SecondaryReverse = Template.bind({});
SecondaryReverse.args = {
  label: 'Secondary Button (Reverse)',
  classes: 'button--secondary-reverse'
};

export const SecondaryTransparent = Template.bind({});
SecondaryTransparent.args = {
  label: 'Secondary Button (Transparent)',
  classes: 'button--secondary-transparent'
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
