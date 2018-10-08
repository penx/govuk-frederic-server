const { version } = require('../../package.json')

// Serves up the version of the govuk-frederic-server that the user is looking at
// TODO: also include the version of the React application being served
function versionRouteHandler(req, res) {
  res.send(`@govuk-frederic/server@${version}`)
}

module.exports = versionRouteHandler
