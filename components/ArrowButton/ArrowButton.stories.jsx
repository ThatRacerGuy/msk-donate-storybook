import React from 'react';

import { ArrowButton } from './ArrowButton';

export default {
  title: 'Atoms/Buttons/Arrow Button',
  component: ArrowButton,
};

const Template = (args) => <ArrowButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Arrow Button',
};

export const Secondary= Template.bind({});
Secondary.args = {
  label: 'Arrow Button (Secondary)',
  classes: 'arrow-button--secondary'
};
