import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const getDevServerConfig = (
  port: number,
  isDevelopment: boolean
): DevServerConfiguration =>
  isDevelopment
    ? {
        port,
        compress: true,
        hot: true,
        client: {
          overlay: {
            errors: true,
            warnings: true,
            runtimeErrors: true,
          },
          progress: true,
        },
        onListening: function () {
          console.log('\nListening on port: ', this.port);
        },
        open: true,
        historyApiFallback: true,
      }
    : undefined;
