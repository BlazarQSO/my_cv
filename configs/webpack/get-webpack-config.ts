import { getDevServerConfig } from './get-dev-server';
import { getPlugins } from './get-plugins';
import { getLoaders } from './get-loaders';
import { getResolvers } from './get-resolvers';
import { Configuration } from 'webpack';
import { BuildOptions } from './interfaces';

export const getWebpackConfig = ({
  port,
  paths,
  mode: { isDevelopment, isProduction },
  analyzer,
}: BuildOptions): Configuration => ({
  entry: {
    index: paths.entry,
  },
  output: {
    filename: isProduction ? '[name].[contenthash].js' : '[name].js',
    path: paths.output,
    publicPath: '/',
    clean: true,
    // assetModuleFilename: 'assets/[name][ext]',
  },
  mode: isProduction ? 'production' : 'development',
  resolve: getResolvers(paths.rootPath),
  devtool: isDevelopment && 'eval-source-map',
  // optimization: '',
  module: {
    rules: getLoaders(isDevelopment, isProduction),
  },
  plugins: getPlugins(isDevelopment, isProduction, paths, analyzer),
  devServer: getDevServerConfig(port, isDevelopment),
});
