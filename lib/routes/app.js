const fs = require('fs')
const config = require('config')

const html = fs.readFileSync(config.get('reactApp.htmlPath'))

function appRoute(req, res) {
  res.set('Content-Type', 'text/html')
  // TODO: serve condig via client-config.js
  // TODO: load webpack artifact to decide on JS entry point to inluce in head
  res.send(html)
}

module.exports = appRoute
