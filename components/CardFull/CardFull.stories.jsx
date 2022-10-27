import React from 'react';

import { CardFull } from './CardFull';
import cards from '../data/cards';

export default {
  title: 'Molecules/Cards/Card Full',
  component: CardFull,
};

const Template = (args) => <CardFull {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  card: cards[0],
  type: 'primary',
  buttonType: 'box',
};

export const Right = Template.bind({});
Right.args = {
  card: cards[1],
  position: 'right',
  type: 'secondary',
  buttonType: 'arrow',
};
