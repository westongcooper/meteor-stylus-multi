function stylusTest (test_name, template_name, class_name, style_property, style_value) {
  Tinytest.add(test_name, function(test) {
    var div = document.createElement('div');
    UI.render(Template[template_name], div);
    div.style.display = 'block';
    document.body.appendChild(div);

    var p = div.querySelector('p.' + class_name);
    var property = getStyleProperty(p, style_property);
    test.equal(property, style_value);

    document.body.removeChild(div); // toggle this line to test ur p's, bruh
  });
}

// stylus
stylusTest(
  'stylus - presence',
  'stylus_test_presence',
  'stylus-dashy-left-border',
  'border-left-style',
  'dashed'
);

// nib
stylusTest(
  'stylus - nib ellipsis',
  'stylus_test_nib_ellipsis',
  'stylus-nib-ellipsis',
  'white-space',
  'nowrap'
);

// autoprefixing
stylusTest(
  'stylus - autoprefixer',
  'stylus_test_autoprefixing',
  'stylus-autoprefixed-transition',
  '-webkit-column-count',
  '2'
);

// jeet
stylusTest(
  'stylus - jeet columns',
  'stylus_test_jeet_columns',
  'stylus-jeet-column',
  'float',
  'left'
);

// rupture
stylusTest(
  'stylus - rupture media query',
  'stylus_test_rupture_media_query',
  'stylus-rupture-media-query',
  'color',
  'rgb(0, 116, 217)'
);

// axis
stylusTest(
  'stylus - axis border mixin',
  'stylus_axis_border',
  'stylus-axis-border',
  'border',
  '1px solid rgb(51, 51, 51)'
);

// import-only
stylusTest(
  'stylus - import-only shorthand',
  'stylus_test_import_only',
  'stylus-test-import-only',
  'color',
  'rgb(0, 116, 217)'
);
