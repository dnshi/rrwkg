require('babel-polyfill')
require('babel-core/register')({
  presets: ['es2015-node5'],
})

require('./app.js')
