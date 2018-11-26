# GOV.UK Frederic Server

Work in progress Node application that plans to:

- [x] Take output from a Webpack/create react app build using @govuk-frederic/example application by default
- [x] Use config settings to use a different output from create-react-app
- [x] Serve as a React application with boilerplate html.
- [x] Use node-config for loading configuration.
- [x] Use Winston for logging.
- [x] Can be used standalone
- [ ] Can be configured to point to a separately running webpack-dev-server
- [ ] Can be used as a dependency.
  - [ ] Can pass in Winston transport
  - [ ] Config works when a dependency
  - [ ] Peer application can specify React application to use
- [ ] Flag to enable server side rendering of React app
- [ ] Read in feature flags from config/environment variables and make available to react app on front end
- [ ] Configurable to support only sending a subset of feature flags to client
- Follows node web server best practices where applicable:
  - [ ] TLS
  - [x] Helmet
  - [ ] Use cookies securely, Don’t use the default session cookie name
  - [ ] Set cookie flags and scope
  - [ ] Ensure your dependencies are secure, use npm audit, Snyk and/or nsp
  - [ ] Brute Force Protection
  - [x] CSRF for state-changing requests N/A
  - [ ] Use gzip compression
  - [x] Don’t use synchronous functions
  - [ ] Lint for sync functions
  - [ ] Use trace-sync-io flag
  - [ ] Use middleware to serve static files
  - [ ] Support/document using reverse proxy for static files
  - [ ] Use [debug](https://www.npmjs.com/package/debug) for logging debug messages (via Winston?)
  - [x] Do logging right
  - [ ] Handle exceptions properly
  - [x] Lowercase file names
- Best practice sources:
  - https://expressjs.com/en/advanced/best-practice-security.html
  - https://blog.risingstack.com/node-js-security-checklist/
  - https://strongloop.com/strongblog/best-practices-for-express-in-production-part-one-security/
  - https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/
  - https://strongloop.com/strongblog/node-js-deploy-production-best-practice/
  - https://devcenter.heroku.com/articles/node-best-practices
- Authentication and Sessions
  - [ ] Implements OpenID Connect using Auth0 https://auth0.com/docs/protocols/oidc
  - [ ] Configurable to other OpenID systems using config settings
  - [ ] Use [OpenID Connect Code Flow]([https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth)
    - [ ] Manage sessions on the server
    - [ ] Exchange Authorization Code for an ID Token that is kept in the user's session on the server and is not revealed to client
    - [ ] Follow auth0 tutorial https://auth0.com/docs/api-auth/tutorials/authorization-code-grant
  - [ ] Provides URL of authenticated API endpoint to React application
  - [ ] Configuration to allows webpack assets to be paired with roles, only serve up assets if user is authenticated and belongs to one of a given set of roles.
  - [ ] Configuration to require authentication to serve up html boilerplate and initial React entry point. Allow a redirect url to be specified in configuration if user is not authenticated.
  - [ ] Support using redis for sessions, possibly by using a combination of: connect-redis, express-session, openid-client and passport. Maybe use similar approach to Winston transports.

# Frederic projects:

https://github.com/stevesims/govuk-frederic
https://github.com/penx/govuk-frederic-server
https://github.com/penx/govuk-frederic-app-container
https://github.com/penx/govuk-frederic-example
https://github.com/penx/govuk-frederic-example-module
