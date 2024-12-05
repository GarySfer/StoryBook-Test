import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {
    builder: "webpack5",
  },

  staticDirs: ["..\\public"],

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
