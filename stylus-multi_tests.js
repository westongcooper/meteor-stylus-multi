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
  'stylus - nib gradient',
  'stylus_test_nib_gradient',
  'stylus-nib-gradient',
  'background',
  'rgba(0, 0, 0, 0) -webkit-linear-gradient(top, rgb(255, 255, 255), rgb(34, 34, 34)) repeat scroll 0% 0% / auto padding-box border-box'
);

// nib autoprefixing
stylusTest(
  'stylus - nib autoprefixer',
  'stylus_test_nib_autoprefixing',
  'stylus-nib-autoprefixed-transition',
  '-webkit-transition',
  'all 1s ease 0s'
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

// platonic
stylusTest(
  'stylus - platonic pentagon',
  'stylus_platonic_pentagon',
  'stylus-platonic-pentagon',
  '-webkit-transform',
  'matrix(1, 0, 0, 1, 80, 0)'
);
