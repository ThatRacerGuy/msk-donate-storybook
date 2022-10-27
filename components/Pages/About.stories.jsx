import React from 'react';

import { Page } from './About';
import * as HeaderStories from '../Header/Header.stories';
import * as HeroStories from '../Hero/Hero.stories';
import * as FooterStories from '../Footer/Footer.stories';

export default {
  title: 'Pages/About',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const About = Template.bind({});
About.args = {
  ...HeaderStories.Default.args,
  ...HeroStories.Another.args,
  ...FooterStories.Default.args,
};
About.parameters = {
  layout: 'fullscreen',
};
