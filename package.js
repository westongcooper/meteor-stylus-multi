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
    stylus: "0.48.1",
    nib: "1.0.3",
    "autoprefixer-stylus": "0.2.0",
    jeet: "5.3.0",
    rupture: "0.3.1",
    axis: "0.2.1",
    "stylus-platonic": "https://github.com/cryptoquick/stylus-platonic/archive/7b81e32bf4dc53e54f152a5ea374cbcc7b2f25a2.tar.gz"
  }
});

Package.on_test(function(api) {
  api.use(['tinytest', 'test-helpers', 'templating']);
  api.add_files(['stylus-multi_tests.styl', 'stylus-multi_tests.html', 'stylus-multi_tests.js'], 'client');
});
