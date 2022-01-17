module.exports = {
  stories: [
    // "../src/stories/**/*.stories.mdx",
    // "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
