# Gov.UK Frederic Server

Work in progress Node application that plans to:

- Take output from a Webpack/create react app build.
- Serve as a React application with boilerplate html.
- Use node-config for loading configuration.
- Use Winston for logging.
- Can be used standalone or as dependency.
- If as dependency, can pass in Winston transport.
- Follows node web server best practices where applicable
  - https://expressjs.com/en/advanced/best-practice-security.html
  - https://blog.risingstack.com/node-js-security-checklist/
  - https://strongloop.com/strongblog/best-practices-for-express-in-production-part-one-security/
  - https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/
  - https://strongloop.com/strongblog/node-js-deploy-production-best-practice/
  - https://devcenter.heroku.com/articles/node-best-practices
- Supports openid connect, by default set up to use Auth0 https://auth0.com/docs/protocols/oidc but extendable to other systems using config settings.
- Configuration to allows webpack assets to be paired with roles, only serve up assets if user is authenticated and belongs to one of a given set of roles.
- Configuration to require authentication to serve up html boilerplate and initial React entry point. Allow a redirect url to be specified in configuration if user is not authenticated.
- Support [OpenID Connect Code Flow]([https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) to manage sessions and exchange Authorization Code for an ID Token that is kept in the user's session on the server.
- Support using redis for sessions, possibly by using a combination of: connect-redis, express-session, openid-client and passport. Maybe use similar approach to Winston transports.
- flag to enable ssr
- read in feature flags from environment variables and make available to react app on front end. Configurable to support only sending a subset of feature flags to client.
- uses @govuk-frederic/example application by default with some default config options, but this can be overridden by peer and/or config settings.
