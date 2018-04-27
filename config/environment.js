'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'consent-management-frontend',
    environment,
    rootURL: '/consent/',
    locationType: 'auto',
    backendUrl: 'http://localhost',
    frontendUrl: 'http://localhost',
    clientId: 'special-platform',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "'self'",
      'connect-src': "'self' ws://localhost:7000 localhost:7000",
      'img-src': "'self'",
      'report-uri': "'localhost'",
      'style-src': "'self' 'unsafe-inline'",
      'frame-src': "'none'"
    }
  };

  try {
    ENV = (require('./' + environment))(ENV);
  } catch (err) {}
  ENV['auth'] = {
    loginUrl: `${ENV.backendUrl}:8082/auth/realms/master/protocol/openid-connect/auth`,
    logoutUrl: `${ENV.backendUrl}:8082/auth/realms/master/protocol/openid-connect/logout`,
    tokenEndpoint: `${ENV.backendUrl}/auth/realms/master/protocol/openid-connect/token`,
    clientId: `${ENV.clientId}`,
    loginRedirectUri: `${ENV.frontendUrl}/consents`,
    logoutRedirectUri: `${ENV.frontendUrl}/`
  };
  if (environment === 'development') {
    ENV.frontendUrl = 'http://localhost:4200';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
