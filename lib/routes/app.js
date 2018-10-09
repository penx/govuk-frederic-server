const fs = require('fs')

// TODO: from config
const html = fs.readFileSync('node_modules/@govuk-frederic/example/build/index.html')

// Serves up the version of the govuk-frederic-server that the user is looking at
// TODO: also include the version of the React application being served
function appRoute(req, res) {
  res.set('Content-Type', 'text/html')
  res.send(html)
}

module.exports = appRoute
