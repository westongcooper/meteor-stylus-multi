Package.describe({
  summary: 'Stylus, w/ Nib, Rupture, Axis and PostCSS with Lost & Rucksack',
  version: '1.4.0',
  name: 'stolinski:stylus-multi',
  git: 'https://github.com/stolinski/meteor-stylus-multi.git'
});

Package._transitional_registerBuildPlugin({
  name: 'stolinski:stylus-multi',
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    "stylus": "0.52.4",
    "autoprefixer-stylus": "0.5.0",
    "rupture": "0.6.1",
    "axis": "0.5.0",
    "lost": "6.6.2",
    "postcss": "5.0.6",
    "rucksack-css": "0.8.2"
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
