const config = require('config');

// A list of config options from node-config that we want to send to the browser
const clientConfigWhitelist = [
  'apiUrl'
];

let clientConfig;

function buildClientConfig() {
  clientConfig = clientConfigWhitelist.reduce((accumulator, currentValue) => ({
    ...accumulator,
    [currentValue]: config.get('currentValue')
  }), {})
}
function getClientConfig() {
  if (!clientConfig) {
    buildClientConfig();
  }
  return clientConfig;
}

module.exports = getClientConfig;
