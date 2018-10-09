const express = require('express')
const config = require('config')

function static(app) {
  app.use(config.get('reactapp.assetRoute'), express.static(config.get('reactapp.assetPath')));
}

module.exports = static
