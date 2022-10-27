import React from 'react';

import { CardRow } from './CardRow';
import * as Card from '../Card/Card.stories';
import cards from '../data/cards';

export default {
  title: 'Organisms/Card Row',
  component: CardRow,
};

const Template = (args) => <CardRow {...args} />;

export const OneColumn = Template.bind({});
OneColumn.args = {
  type: 'primary',
  cards: cards.slice(0, 1),
  columns: 1,
  buttonType: 'box',
};

export const TwoColumn = Template.bind({});
TwoColumn.args = {
  title: 'Be There',
  type: 'secondary',
  cards: cards.slice(0, 2),
  columns: 2,
  buttonType: 'box',
};

export const ThreeColumn = Template.bind({});
ThreeColumn.args = {
  title: 'See What\'s Happening',
  type: 'primary',
  cards: cards.slice(0, 3),
  columns: 3,
  buttonType: 'arrow',
};

export const FourColumn = Template.bind({});
FourColumn.args = {
  type: 'secondary',
  cards: cards,
  columns: 4,
  buttonType: 'arrow',
};
