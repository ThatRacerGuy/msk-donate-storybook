import React from 'react';

import { Card } from './Card';
import cards from '../data/cards';

export default {
  title: 'Molecules/Cards/Simple Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  card: cards[1],
  type: 'primary',
  buttonType: 'box',
};

export const PrimaryArrow = Template.bind({});
PrimaryArrow.args = {
  card: cards[3],
  type: 'primary',
  buttonType: 'arrow',
};
