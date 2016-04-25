const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BUILD = process.env.NODE_ENV === 'production'
const contentPath = path.resolve('./www')
const clientPath = path.resolve('./client')
const assetsPath = path.resolve('./client/_assets/css')
const assetsGlobalPath = path.resolve('./client/_assets/css/global')

module.exports = {
  entry: {
    app: './client/index',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
    ],
  },
  output: {
    path: contentPath,
    publicPath: 'http://localhost:3000/',
    filename: './static/[name].bundle.js',
  },
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
        exclude: assetsGlobalPath,
        loader: ExtractTextPlugin.extract('style',
          'css?modules&importLoaders=1&localIdentName=' +
          `${BUILD ? '' : '[name]__[local]__'}[hash:base64:5]` +
          `${BUILD ? '&minimize' : '&sourceMap'}` +
          `!sass?${BUILD ? '' : '&sourceMap'}`
        ),
      }, {
        test: /\.scss$/,
        include: assetsGlobalPath,
        loader: ExtractTextPlugin.extract('style',
          `css?${BUILD ? '' : '&sourceMap'}!sass?${BUILD ? '' : '&sourceMap'}`
        ),
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: `url?limit=${BUILD ? '100000' : '1000'}&name=resource/[hash:9].[ext]`,
      },
    ],
  },
  sassLoader: {
    includePaths: [
      './client/_assets/css',
      './node_modules/bootstrap/scss',
      './node_modules/google-material-color/dist',
    ],
  },
  devServer: {
    contentBase: contentPath,
    proxy: {
      '/graphql': {
        target: 'http://localhost:4000/graphql',
      },
    },
    // contentBase: './client',
    // noInfo: true,
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
}
