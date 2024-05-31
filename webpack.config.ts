import path from 'path';
import { getWebpackConfig } from './configs/webpack/get-webpack-config';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

export default getWebpackConfig({
  port: Number(process.env.PORT) || 3000,
  paths: {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    pathHtml: path.resolve(__dirname, 'public', 'index.html'),
    pathPublic: path.resolve(__dirname, 'public'),
    rootPath: path.resolve(__dirname, 'src'),
  },
  mode: { isDevelopment, isProduction },
  analyzer: process.env.analyzer === 'true',
});
