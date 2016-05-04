// Detect node version and dynamicaly add node4/node5/node6
require('babel-core/register')({
  presets: [`es2015-node${process.version.match(/\d+/)[0]}`],
})

require('./app.js')
