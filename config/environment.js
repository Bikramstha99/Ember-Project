'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'movie-ember',
    environment,
    rootURL: '/',
    
    locationType: 'hash',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },
    // contentSecurityPolicy: {
    //   'connect-src': "'self' http://localhost:4200 https://localhost:7077",
    // },
    APP: {
     
    },
    // apiUrl:'https://localhost:77',
  };

  if (environment === 'development') {
    ENV.apiUrl='https://localhost:7077';
    ENV.locationType = 'hash';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.apiUrl='https://localhost:7077'; 
    // Testem prefers this...
    ENV.locationType = 'hash';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.apiUrl='https://localhost:44334';
    ENV.locationType = 'hash';
    // here you can enable a production-specific feature
  }

  return ENV;
};
