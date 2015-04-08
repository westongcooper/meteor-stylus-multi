var Future = Npm.require('fibers/future');
var stylus = Npm.require('stylus');
var autoprefixer = Npm.require('autoprefixer-stylus');
var jeet = Npm.require('jeet');
var rupture = Npm.require('rupture');
var axis = Npm.require('axis');
var path = Npm.require('path');
var lost = Npm.require('lost-grid');

Plugin.registerSourceHandler("styl", {archMatching: 'web'}, function(compileStep) {
    var f = new Future;

    var file = compileStep.read().toString('utf8');

    // Skips files with //@import-only as their first line.
    if(file.indexOf('//@import-only') === 0) return;

    stylus(file)
        .use(jeet())
        .use(axis())
        .use(rupture())
        .use(lost())
        .use(autoprefixer())
        .set('filename', compileStep.inputPath)
        // Include needed to allow relative @imports in stylus files
        .include(path.dirname(compileStep._fullInputPath))
        .render(f.resolver());

    try {
        var css = f.wait();
        } catch (e) {
            compileStep.error({
                message: "Stylus compiler error: " + e.message
            });
            return;
        }
    compileStep.addStylesheet({
        path: compileStep.inputPath + ".css",
        data: css
    });
});

// Register import.styl files with the dependency watcher, without actually
// processing them. There is a similar rule in the less package.
Plugin.registerSourceHandler("import.styl", function () {
  // Do nothing
});
