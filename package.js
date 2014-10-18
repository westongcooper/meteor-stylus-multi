Package.describe({
  summary: 'Stylus, packaged with Nib, Jeet, Rupture, and Axis',
  version: '0.1.1',
  name: 'cryptoquick:stylus-multi',
  git: 'https://github.com/furrio/meteor-stylus-multi.git'
});

Package._transitional_registerBuildPlugin({
  name: 'cryptoquick:stylus-multi',
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: '0.49.2',
    'autoprefixer-stylus': '0.3.0',
    jeet: '6.1.2',
    rupture: '0.4.0',
    axis: '0.3.0'
  }
});

Package.onTest(function(api) {
  api.use(['cryptoquick:stylus-multi', 'tinytest', 'test-helpers', 'templating']);
  api.add_files(['stylus-multi_tests.styl', 'stylus-multi_tests.html', 'stylus-multi_tests.js'], 'client');
});
