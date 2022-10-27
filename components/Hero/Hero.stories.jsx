import React from 'react';

import { Hero } from './Hero';
import heros from '../data/heros';

export default {
  title: 'Molecules/Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  hero: heros[0]
};

export const Another = Template.bind({});
Another.args = {
  hero: heros[1]
};
