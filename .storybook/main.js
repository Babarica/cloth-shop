const config = {
    // Required
    // Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
    framework: '@storybook/vue3-vite',
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    // Optional
    addons: [
      {
        name: '@storybook/addon-postcss',
        options: {
          cssLoaderOptions: {
            importLoaders: 1,
          },
          postcssLoaderOptions: {
            implementation: require('postcss'),
          },
        },
      },
      "@storybook/addon-links",
      '@storybook/addon-essentials'
    ],
    docs: {
      autodocs: 'tag',
    },
    staticDirs: ['../public'],
  };
  export default config;