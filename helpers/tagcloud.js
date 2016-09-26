var handlebars = require('handlebars');

module.exports = function(hexo){return function(tags, options){
  var hexoHelpers = hexo.extend.helper.list(),
    arg,
    opts,
    result;

  switch (arguments.length) {
    case 1:
      arg = arguments[0];
      if (arg.hasOwnProperty('hash')) {
        opts = arg.hash || {};
      } else {
        tags = arg;
      }
      break;
    case 2:
      opts = options.hash || {};
      break;
    default:
      tags = null;
      opts = {};
      break;
  }

  var self = arguments[arguments.length - 1].data.root;
  result = hexoHelpers.tagcloud.call(self, tags, opts);
  return new handlebars.SafeString(result);
}};
