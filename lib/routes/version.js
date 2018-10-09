const { name, version } = require('../../package.json')
const fredericPackage = require('@govuk-frederic/example/package.json')

// Serves up the version of the govuk-frederic-server that the user is looking at
// TODO: if configured to use a React application other than Frederic, use that application's name and version rather than Frederic.
function versionRouteHandler(req, res) {
  res.send(`${name}@${version}
${fredericPackage.name}@${fredericPackage.version}`)
}

module.exports = versionRouteHandler
