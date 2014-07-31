var handlebars = require('handlebars');

module.exports = function(tags, options){
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

  result = hexoHelpers.tagcloud(tags, opts);
  return new handlebars.SafeString(result);
};