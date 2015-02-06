var $ = require('jquery');

require('./../src/jquery.scrollsnap.js');

$(document).scrollsnap({
  snaps: 'img',
  proximity: 300//,
  // easing: 'easeOutBack'
});
