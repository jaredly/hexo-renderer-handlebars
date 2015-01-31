var handlebars = require('handlebars');

module.exports = function(view, options){
  var hexoHelpers = hexo.extend.helper.list(),
    opts = options.hash || {},
    result;

  result = hexoHelpers.partial.call(this, view, opts);
  return new handlebars.SafeString(result);
};