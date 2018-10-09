const express = require('express')
const config = require('config')

function static(app) {
  app.use(config.get('reactApp.assetRoute'), express.static(config.get('reactApp.assetPath')));
}

module.exports = static
