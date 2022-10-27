import React from 'react';

import { Headline } from './Headline';

export default {
  title: 'Atoms/Headline',
  component: Headline,
};

const Template = (args) => <Headline {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Headline',
};

export const Light = Template.bind({});
Light.args = {
  title: 'Headline (Light)',
  color: 'light',
};
