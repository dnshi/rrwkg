const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BUILD = process.env.NODE_ENV !== 'dev'
const contentPath = path.resolve('./www')
const clientPath = path.resolve('./client')
const assetsPath = path.resolve('./client/_assets/css')
const assetsGlobalPath = path.resolve('./client/_assets/css/global')

module.exports = {
  devtool: !BUILD && 'cheap-module-eval-source-map',
  entry: {
    app: './client/index',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
    ],
  },
  output: {
    path: contentPath,
    filename: './static/[name].bundle.js',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: false,
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),

    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(!BUILD),
    }),

    new ExtractTextPlugin('[name].css', { disable: !BUILD }),
  ],
  resolve: {
    modules: [
      clientPath,
      assetsPath,
      'node_modules',
    ],
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ },
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel?cacheDirectory=true', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      {
        test: /\.scss$/,
        exclude: [
          assetsGlobalPath,
          /node_modules/,
        ],
        loader: ExtractTextPlugin.extract('style',
          'css?modules&importLoaders=1&localIdentName=' +
          `${BUILD ? '' : '[name]__[local]__'}[hash:base64:5]` +
          `${BUILD ? '&minimize' : '&sourceMap'}` +
          '!sass?sourceMap'
        ),
      },
      {
        test: /\.scss$/,
        include: assetsGlobalPath,
        loader: ExtractTextPlugin.extract('style',
          `css?${BUILD ? '' : '&sourceMap'}!sass?sourceMap`
        ),
      },
    ],
  },
  devServer: {
    contentBase: contentPath,
    // contentBase: './client',
    // noInfo: true,
  },
}
