import React from 'react';

import { ButtonLink } from './ButtonLink';

export default {
  title: 'Atoms/Links/Button',
  component: ButtonLink,
};

const Template = (args) => <ButtonLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  link: '/link1',
};
