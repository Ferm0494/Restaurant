const path = require('path');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [{
        // Adds CSS to the DOM by injecting a `<style>` tag
        loader: 'style-loader',
      },
      {
        // Interprets `@import` and `url()` like `import/require()` and will resolve them
        loader: 'css-loader',
      },
      {
        // Loader for webpack to process CSS with PostCSS
        loader: 'postcss-loader',

      },
      {
        // Loads a SASS/SCSS file and compiles it to CSS
        loader: 'sass-loader',
      },
      ],
    },
    {
      test: /\.(png|svg|jpg|gif|jpeg)$/,
      use: ['file-loader'],
    },
    ],
  },
};