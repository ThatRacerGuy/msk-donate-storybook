import React from 'react';

import { ArrowButtonLink } from './ArrowButtonLink';

export default {
  title: 'Atoms/Links/Arrow Button',
  component: ArrowButtonLink,
};

const Template = (args) => <ArrowButtonLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Arrow Button',
  link: '#1',
};
