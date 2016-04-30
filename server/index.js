// require('babel-polyfill')
require('babel-core/register')({
  // presets: ['es2015-node5'],
  plugins: [
    require('babel-plugin-transform-es2015-modules-commonjs'),
  ],
})

require('./app.js')
