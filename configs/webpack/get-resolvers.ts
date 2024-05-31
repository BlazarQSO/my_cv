import path from 'path';
import { Configuration } from 'webpack';

export const getResolvers = (rootPath: string): Configuration['resolve'] => ({
  extensions: ['.tsx', '.ts', '.js', '.json'],
  alias: {
    '@': rootPath,
    Pages: path.resolve(rootPath, './pages'),
    Icons: path.resolve(rootPath, './assets/icons'),
  },
});
