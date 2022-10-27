module.exports = {
  stories: [
    "../src/stories/*.stories.mdx",
  ],
  staticDirs: [
    "../public",
    "../dist",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  features: {
    postcss: false,
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  refs: {
    /* giving: {
      title: 'MSK Giving',
      url: 'http://localhost:7007',
    }, */
    /* kids: {
      title: 'MSK Kids Walk',
      url: 'http://localhost:8006',
    }, */
  },
};
