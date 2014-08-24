Package.describe({
  summary: 'Stylus, packaged with Nib, Jeet, Rupture, and Axis',
  version: '0.0.5',
  name: 'cryptoquick:stylus-multi',
  git: 'https://github.com/furrio/meteor-stylus-multi.git'
});

Package._transitional_registerBuildPlugin({
  name: 'cryptoquick:stylus-multi',
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: "0.48.1",
    nib: "1.0.3",
    jeet: "5.3.0",
    rupture: "0.3.1",
    axis: "0.2.1",
    "stylus-platonic": "https://github.com/cryptoquick/stylus-platonic/archive/7b81e32bf4dc53e54f152a5ea374cbcc7b2f25a2.tar.gz"
  }
});

Package.onTest(function(api) {
  api.use(['cryptoquick:stylus-multi', 'tinytest', 'test-helpers', 'templating']);
  api.add_files(['stylus-multi_tests.styl', 'stylus-multi_tests.html', 'stylus-multi_tests.js'], 'client');
});
