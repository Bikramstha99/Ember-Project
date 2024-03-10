'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    autoImport: {
      webpack: {
        output: {
          filename: 'chunk.[id].js'
        },
        optimization: {
          realContentHash: true
        }
      }
    }
    
  });
  return app.toTree();
  
};
