import { BuildPaths } from './interfaces/index';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import webpack, { Configuration } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

type Plugins = Configuration['plugins'];

export const getPlugins = (
  isDevelopment: boolean,
  isProduction: boolean,
  paths: BuildPaths,
  isAnalyzer: boolean
): Plugins => {
  const plugins: Plugins = [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: paths.pathHtml,
      favicon: path.resolve(paths.pathPublic, 'favicon.png'),
      minify: {
        collapseWhitespace: isProduction,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(paths.pathPublic, 'locales'),
          to: path.resolve(paths.output, 'locales'),
        },
      ],
    }),
  ];

  if (isDevelopment) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (isProduction) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'style/[name].[contenthash:8].css',
        chunkFilename: 'style/[name].[contenthash:8].css',
      })
    );
    isAnalyzer && plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
};
