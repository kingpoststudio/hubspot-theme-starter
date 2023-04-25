require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HubSpotAutoUploadPlugin = require('@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin');

const mainConfig = ({ portal, autoupload, hsDest }) => ({
  mode: 'production',

  entry: {
    'build/main': './src/js/main.ts',
    'modules/HeroBanner.module/module': './src/modules/HeroBanner.module/module.ts',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  optimization: {
    minimizer: [new ESBuildMinifyPlugin({ target: 'es2020', css: true })],
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2020',
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },

  plugins: [
    new HubSpotAutoUploadPlugin({
      portal,
      autoupload,
      src: 'dist',
      dest: hsDest,
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/modules', to: 'modules' },
        { from: 'src/templates', to: 'templates' },
        { from: 'src/theme.json', to: 'theme.json' },
      ],
    }),
  ],
});

module.exports = mainConfig;
