var $ = jQuery = require('./node_modules/jquery/dist/jquery.js');
var iframeResizer = require('./node_modules/iframe-resizer/src/iframeResizer.js')
$(document).ready(function () {
  var src = $('#my-widget').attr('app-src');
  var iframeName = 'jQuery_iframe_1234567890';
  $('#my-widget').parent().append(`<iframe src="${src}" width="100%" scrolling="no"></iframe>`);
  var $iframes = $('iframe');
  $iframes.each(function () {
    $(this).ready(function(){
      iframeResizer({});
    })
  });
  iframeResizer({});
})
