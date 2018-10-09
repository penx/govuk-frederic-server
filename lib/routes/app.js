const fs = require('fs')
const config = require('config')

const html = fs.readFileSync(config.get('reactApp.htmlPath'))

function appRoute(req, res) {
  res.set('Content-Type', 'text/html')
  res.send(html)
}

module.exports = appRoute
