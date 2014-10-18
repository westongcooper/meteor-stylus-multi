var fs = require('fs');

Package = {};

var content = [];

Package.describe = Package._transitional_registerBuildPlugin = Package.onTest = function (contents) {
  content.push(contents);
};

require('./package.js');

var desc = content[0];
var pkg = content[1];

var json = {
  name: desc.name.split(':')[1],
  version: desc.version,
  description: desc.summary,
  repository: {
    type: 'git',
    url: desc.git
  },
  dependencies: pkg.npmDependencies,
  private: true
};

var str = JSON.stringify(json, null, 2);

fs.writeFile('package.json', str, function () {
  console.log(str);
});
