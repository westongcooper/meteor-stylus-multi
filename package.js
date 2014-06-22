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
    stylus: "0.46.3",
    nib: "1.0.2",
    jeet: "5.2.10",
    rupture: "0.1.0",
    axis: "0.2.0"
  }
});

Package.on_test(function(api) {
  // api.use(['tinytest', 'stylus-latest', 'test-helpers']);
  // api.use('spark');
  // api.add_files(['stylus_tests.styl', 'stylus_tests.js'], 'client');
});
