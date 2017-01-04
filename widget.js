var $ = jQuery = require('./node_modules/jquery/dist/jquery');
if (!window.iframeResizer)
  window.iframeResizer = require('./node_modules/iframe-resizer/js/iframeResizer');
$('script[src="' + process.env.APP_CONFIG.SCRIPT_URL + '"]').each(function () {
  if (!$(this).attr('id')) {
    var scriptId = guid();
    var iframeId = guid();
    $(this).attr('id', scriptId);
    var src = $(this).attr('app-src');
    var iframe = `<iframe id=${iframeId} scriptId="${scriptId}" src="${src}" width="100%" scrolling="no" style="border: 0px"></iframe>`;
    $(this).parent().append(iframe);
    window.iframeResizer({});
  }
});

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}