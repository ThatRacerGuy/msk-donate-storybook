const path = require('path');

module.exports = {
  stories: [
    "../../components/*.stories.mdx",
    "../../components/**/*.stories.@(js|jsx)",
  ],
  staticDirs: [
    "../../public",
    "../../dist",
    "../../kids/src/assets",
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
  /* Addition to allow folders other than 'src' to serve stories */
  webpackFinal: (config) => {
    config.resolve.alias = {
      'react-native': 'react-native-web'
    };
    config.module.rules[5].oneOf[3].include.push(
      path.resolve('../components')
    )
    return config;
  }
};
