Package.describe({
  summary: 'Stylus, w/ Rupture, Axis and PostCSS with Lost & Rucksack',
  version: '1.5.1',
  name: 'westoncooper:stylus-multi',
  git: 'https://github.com/stolinski/meteor-stylus-multi.git'
});

Package._transitional_registerBuildPlugin({
  name: 'westoncooper:stylus-multi',
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
      "stylus": "0.54.5",
      "autoprefixer-stylus": "0.13.0",
      "rupture": "0.6.1",
      "axis": "1.0.0",
      "lost": "8.0.0",
      "postcss": "5.2.17",
      "rucksack-css": "0.9.1",
      "autoprefixer": "6.7.7"
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
