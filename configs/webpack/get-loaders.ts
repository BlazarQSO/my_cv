import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { ModuleOptions } from 'webpack';

export const getLoaders = (
  isDevelopment: boolean,
  isProduction: boolean
): ModuleOptions['rules'] => {
  const styleLoader = {
    test: /\.(sa|sc|c)ss$/i,
    use: [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            auto: true,
            exportGlobals: true,
            localIdentName: isProduction
              ? '[hash:base64:8]'
              : '[path]__[name]__[local]',
            exportOnlyLocals: false,
          },
          sourceMap: isDevelopment,
        },
      },
      'sass-loader',
    ],
  };
  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  const tsBabelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  };

  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name() {
            if (process.env.NODE_ENV === 'development') {
              return '[path][name].[ext]';
            }

            return '[path][contenthash].[ext]';
          },
        },
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColors: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader'],
  };

  const csvLoader = {
    test: /\.(csv|tsv)$/,
    use: ['csv-loader'],
  };

  const xmlLoader = {
    test: /\.xml$/,
    use: ['xml-loader'],
  };

  return [
    styleLoader,
    // tsLoader,
    tsBabelLoader,
    assetsLoader,
    svgLoader,
    fontsLoader,
    csvLoader,
    xmlLoader,
  ];
};
