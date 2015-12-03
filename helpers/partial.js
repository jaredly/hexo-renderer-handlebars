var handlebars = require('handlebars');

module.exports = function(hexo){return function(view, options){
  var hexoHelpers = hexo.extend.helper.list(),
    opts = options.hash || {},
    result;

  result = hexoHelpers.partial(view, opts);
  return new handlebars.SafeString(result);
}};
