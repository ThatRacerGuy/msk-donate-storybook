import React from 'react';

import { AlertBanner } from './AlertBanner';

export default {
  title: 'Molecules/Alert Banner',
  component: AlertBanner,
};

const Template = (args) => <AlertBanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  banner: {
    id: '1',
    summary: 'Alert banner summary - read the series celebrating MSK heroes who go above and beyond for our patients each and every day.',
    linkTitle: 'CTA',
    linkHref: '/a_special_thanks',
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  banner: {
    id: '2',
    summary: 'Alert banner summary - read the series celebrating MSK heroes who go above and beyond for our patients each and every day.',
    linkTitle: 'CTA',
    linkHref: '/a_special_thanks',
  },
  type: 'secondary',
};
