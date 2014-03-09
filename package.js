Package.describe({
  summary: 'Stylus, packaged with Nib, Jeet, Rupture, and Axis mixin packages'
});

Package._transitional_registerBuildPlugin({
  name: "compileStylus",
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: "0.42.3",
    nib: "1.0.2",
    jeet: "5.1.3",
    rupture: "0.0.2",
    "axis-css": "0.1.8"
  }
});

Package.on_test(function(api) {
  // api.use(['tinytest', 'stylus-latest', 'test-helpers']);
  // api.use('spark');
  // api.add_files(['stylus_tests.styl', 'stylus_tests.js'], 'client');
});
