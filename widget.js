var $ = jQuery = require('./node_modules/jquery/dist/jquery');
var iframeResizer = require('./node_modules/iframe-resizer/js/iframeResizer')
$(document).ready(function () {
  var src = $('#my-widget').attr('app-src');
  var iframeName = 'jQuery_iframe_1234567890';
  $('#my-widget').parent().append(`<iframe src="${src}" width="100%" scrolling="no"></iframe>`);
  var $iframes = $('iframe');
  iframeResizer({});
})
