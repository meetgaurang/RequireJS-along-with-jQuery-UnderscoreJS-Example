(function() {
  'use strict';

  // Configure RequireJS to shim Jasmine
  require.config({
  baseUrl: "..",
  paths: {
    jquery : 'lib/jquery-2.0.3',
    text: 'lib/text',
    underscore : 'lib/underscore',
    jasmine: 'jasmine-test/lib/jasmine-2.0.2/jasmine',
    'jasmine-html': 'jasmine-test/lib/jasmine-2.0.2/jasmine-html',
    boot: 'jasmine-test/lib/jasmine-2.0.2/boot'
  },
  shim: {
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    boot: {
      deps: ['jasmine', 'jasmine-html'],
      exports: 'jasmine'
    }
  }
});

  // Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
  // AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
  // we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
  // initialize the HTML Reporter and execute the environment.
  require(['boot'], function (boot) {
    var jasmineEnv = boot.getEnv();
    //jasmineEnv.updateInterval = 1000;
    var specs = ['jasmine-test/spec/userDataModelSpec'];
    // Load the specs
    require(specs, function () {
      // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      window.onload();
    });
  });
})();