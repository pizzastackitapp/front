import type { StorybookConfig } from "@storybook/react-webpack5";


const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx', // 👈 Add this, to match your project's structure
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-docs',
    "@storybook/addon-styling-webpack"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
};
export default config;
