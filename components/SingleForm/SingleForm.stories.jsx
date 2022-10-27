import React from 'react';

import { SingleForm } from './SingleForm';

export default {
  title: 'Molecules/Single Form',
  component: SingleForm,
};

const Template = (args) => <SingleForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Enter your email address',
  label: 'Submit',
  bg: 'dark',
};
