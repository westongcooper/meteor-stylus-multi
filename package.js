Package.describe({
  summary: 'Stylus, packaged with Nib, Jeet, Rupture, and Axis',
  version: '1.2.0',
  name: 'cryptoquick:stylus-multi',
  git: 'https://github.com/furrio/meteor-stylus-multi.git'
});

Package._transitional_registerBuildPlugin({
  name: 'cryptoquick:stylus-multi',
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: '0.49.3',
    'autoprefixer-stylus': '0.5.0',
    jeet: '6.1.2',
    rupture: '0.6.1',
    axis: '0.3.0'
  }
});

Package.onTest(function(api) {
  api.use([
    'cryptoquick:stylus-multi',
    'tinytest',
    'test-helpers',
    'templating'
  ]);
  api.add_files([
    'stylus-multi_tests.styl',
    'stylus-multi_test_import_only.styl',
    'stylus-multi_tests.html',
    'stylus-multi_tests.js'
  ], 'client');
});
