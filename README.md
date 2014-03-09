stylus-multi
============

This package provides many nice, useful Stylus packages. This approach might be more palatable to some than cluttering up their templates with CSS framework-proprietary classes such as those that come with Zurb Foundation and Twitter Bootstrap, or installing Sass. With these Stylus classes, one can avoid that by using Stylus mixins.

## Included packages

### [Stylus](http://learnboost.github.io/stylus/) 0.42.3

Expressive, dynamic, robust CSS.

### [Nib](http://visionmedia.github.io/nib/) 1.0.2

Nib is a popular stylus package that adds many helpful, basic, utility mixins. It also auto-prefixes your styles if you include this line in your styles:

```
@import 'nib'
```

### [Jeet](http://jeet.gs/) 5.1.3

An advanced-- yet intuitive-- grid system. Very capable, and useful for laying out a page without cluttering up HTML with grid classes.

### [Rupture](https://github.com/jenius/rupture) 0.0.2

Simple media queries for stylus.

### [Axis](http://roots.cx/axis/) 0.1.8

A higher-level stylus mixin library with lots of extra functionality. Be sure not to miss the normalize() mixin.

All of these packages should be compatible with each other.

## Compatibility

All of these packages should be compatible with each other. That said, there are no tests at the moment. Feel free to PR any tests you think might be handy.

NOTE: This is not compatible with other stylus libraries. Please uninstall anything related to stylus before running this, otherwise your application may fail with a Fibers-related error.

## Updates

Feel free to contact the author or submit a PR if these get terribly out-of-date, or if you have any suggestions for other packages to be included.

## Credit

Thanks to @jenius and @corysimmons for their work on Axis & Rupture and Jeet, respectively.

This project was forked from [Dave Gonzalez's fork](https://github.com/davegonzalez/stylus-jeet) of [stylus-latest](https://github.com/sbking/meteor-stylus-latest/).

## Opinions

Developers are an opinionated bunch, but seriously, it's really nice to get framework-proprietary classes out of your templates.

Also, Stylus is best CSS preprocessor. Twilight Sparkle is best pony.
