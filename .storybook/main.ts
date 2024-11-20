import { StorybookConfig } from '@storybook/react';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    // Add SCSS Modules support to Webpack config
    config.module.rules.push({
      test: /\.module\.scss$/,
      use: ['style-loader', 'css-loader?modules', 'sass-loader'],
    });
    return config;
  },
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  }
};

export default config;
