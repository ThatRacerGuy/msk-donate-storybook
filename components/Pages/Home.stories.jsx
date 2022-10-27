import React from 'react';

import { Page } from './Home';
import * as HeaderStories from '../Header/Header.stories';
import * as HeroStories from '../Hero/Hero.stories';
import * as CardRowStories from '../CardRow/CardRow.stories';
import * as FooterStories from '../Footer/Footer.stories';
import cards from '../data/cards';

export default {
  title: 'Pages/Home',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Home = Template.bind({});
Home.args = {
  ...HeaderStories.Default.args,
  ...HeroStories.Primary.args,
  ...CardRowStories.ThreeColumn.args,
  ...FooterStories.Default.args,
  cardRow1: {
    cards: cards.slice(0, 1),
  },
};
Home.parameters = {
  layout: 'fullscreen',
};
