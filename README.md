stylus-multi + postcss
======================

The [Level Up Tutorials](https://www.youtube.com/user/LevelUpTuts) Stylus/PostCSS Stack. Will make your CSS-ing awesome, you will CSS like never before ᕦ(ò_óˇ)ᕤ. Contains the following excellent packages.

## Included packages

## Stylus Packages

### [Stylus](http://learnboost.github.io/stylus/) 0.52.4

Expressive, dynamic, robust CSS. Curly braces and semicolons: optional.

### [Nib](http://visionmedia.github.io/nib/) 1.1.0

Nib is a popular Stylus package that adds many helpful, basic, utility mixins.

### [Autoprefixer](https://github.com/jenius/autoprefixer-stylus) 0.5.0

An autoprefixer plugin for Stylus. Will also remove unnecessary prefixes if there is widespread browser support.

### [Rupture](https://github.com/jenius/rupture) 0.6.1

Simple media queries for Stylus.

### [Axis](http://axis.netlify.com/) 0.5.0

A higher-level Stylus mixin library with lots of extra functionality. Be sure not to miss the normalize() mixin. Axis uses and imports Nib, so Nib has been removed from this package.

## PostCSS Packages

### [PostCSS](https://github.com/postcss/postcss) 5.0.6

PostCSS is a tool for transforming CSS with JS plugins. These plugins can support variables and mixins, transpile future CSS syntax, inline images, and more.

### [Lost](https://github.com/corysimmons/lost) 6.6.2

Lost grid is a powerful grid system built in PostCSS that works with any preprocessor and even vanilla CSS. You can think of it like the Autoprefixer of grid systems.

### [Rucksack](https://simplaio.github.io/rucksack/) 0.8.2

Lost grid is a powerful grid system built in PostCSS that works with any preprocessor and even vanilla CSS. You can think of it like the Autoprefixer of grid systems.

#### Note:

Lost has changed from a Stylus library to a PostCSS system. If you have upgraded from the previous version, your code will break. Please see https://github.com/corysimmons/lost for the latest syntax.

## Features

An additional feature is support for the `//@import-only` shorthand. This will be checked for at the very top of your stylus files. If it's found as the first thing, the file will be skipped, so it can only be imported.

## Compatibility

The package is fully compatible with Meteor 0.9.

All of these packages should be compatible with each other. That said, there are not many tests at the moment. Feel free to PR any tests you think might be handy.

NOTE: This may not be compatible with other Meteor Stylus libraries. Please uninstall anything related to Stylus before running this, otherwise your application may fail with a fibers-related error.

## Updates

Feel free to contact the author or submit a PR if these get terribly out-of-date, or if you have any suggestions for other packages to be included.

## Testing

Basic tests for each module are provided. If you don't test in Chrome, you're gonna have a bad time.

To test, run:

```
meteor test-packages ./
```

## Credit

Thanks to @jenius and @corysimmons for their work on Axis & Rupture and Jeet, respectively. Thanks to @cryptoquick the author of stylus-multi of which this is a fork of.

This project was forked from [Hunter Trujillo's fork](https://github.com/furrio/meteor-stylus-multi) of [Dave Gonzalez's fork](https://github.com/davegonzalez/stylus-jeet) of [stylus-latest](https://github.com/sbking/meteor-stylus-latest/).

## Opinions

Stylus is best CSS preprocessor.

PostCSS is dope.