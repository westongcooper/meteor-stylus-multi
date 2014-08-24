stylus-multi
============

This package provides many nice, useful Stylus packages. This approach might be more palatable to some than cluttering up their templates with CSS framework-proprietary classes such as those that come with Zurb Foundation and Twitter Bootstrap, or installing Sass. With these Stylus classes, one can avoid that by using Stylus mixins.

## Versions

### Meteor 0.8.x
The version from Meteorite, 0.0.4, should work up to and including Meteor 0.8.3, but if it does not, try rolling back to 0.0.2.

### Meteor 0.9.x
This package, stylus-multi 0.0.5, now has preliminary Meteor 0.9 support. stylus-multi 0.0.5 will not be published on Atmosphere.

## Included packages

### [Stylus](http://learnboost.github.io/stylus/) 0.48.1

Expressive, dynamic, robust CSS. Now supports source maps.

`I'm unsure how to get Meteor to work with these, however. It's necessary to be able to turn them off in production. For now, they remain unset. - Hunter`

### [Nib](http://visionmedia.github.io/nib/) 1.0.3

Nib is a popular stylus package that adds many helpful, basic, utility mixins. It also auto-prefixes your styles if you include this line in your styles:

```
@import 'nib'
```

### [Jeet](http://jeet.gs/) 5.3.0

An advanced-- yet intuitive-- grid system. Very capable, and useful for laying out a page without cluttering up HTML with grid classes.

It's important to remember to include it in your styles, like so:

```
@import 'jeet'
```

### [Rupture](https://github.com/jenius/rupture) 0.3.1

Simple media queries for stylus.

### [Axis](http://roots.cx/axis/) 0.2.1

A higher-level stylus mixin library with lots of extra functionality. Be sure not to miss the normalize() mixin.

### [Platonic](http://davidpaulrosser.github.io/stylus-platonic/) 0.0.2

A CSS3D library. This library hasn't seen much maintenance, but what's been made is still _daaamn_ sweet, nonetheless.

## Compatibility

All of these packages should be compatible with each other. That said, there are not many tests at the moment. Feel free to PR any tests you think might be handy.

NOTE: This is not compatible with other Meteor stylus libraries. Please uninstall anything related to stylus before running this, otherwise your application may fail with a Fibers-related error.

## Updates

Feel free to contact the author or submit a PR if these get terribly out-of-date, or if you have any suggestions for other packages to be included.

## Testing

Basic tests for each module are provided. If you don't test in Chrome, you're gonna have a bad time.

## Credit

Thanks to @jenius and @corysimmons for their work on Axis & Rupture and Jeet, respectively.

This project was forked from [Dave Gonzalez's fork](https://github.com/davegonzalez/stylus-jeet) of [stylus-latest](https://github.com/sbking/meteor-stylus-latest/).

## Opinions

Developers are an opinionated bunch, but seriously, it's really nice to get framework-proprietary classes out of your templates.

Also, Stylus is best CSS preprocessor. Twilight Sparkle is best pony.
