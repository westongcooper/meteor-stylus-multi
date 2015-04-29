Package.describe({
  summary: 'Stylus, w/ Nib, Rupture, Axis and PostCSS with Lost',
  version: '1.3.3',
  name: 'stolinski:stylus-multi',
  git: 'https://github.com/stolinski/meteor-stylus-multi.git'
});

Package._transitional_registerBuildPlugin({
  name: 'stolinski:stylus-multi',
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: '0.50.0',
    'autoprefixer-stylus': '0.5.0',
    rupture: '0.6.1',
    axis: '0.3.0',
    "lost": "6.0.2",
    "postcss": "4.1.7"
  }
});

Package.onTest(function(api) {
  api.use([
    'stolinski:stylus-multi',
    'tinytest',
    'test-helpers',
    'templating'
  ]);
  api.add_files([
    'stylus-multi_tests.styl',
    'stylus-multi_test_import_only.styl',
    'stylus-multi_test_import.styl',
    'stylus-multi_tests.html',
    'stylus-multi_tests.js'
  ], 'client');
});
