var handlebars = require('handlebars');

module.exports = function(hexo){return function(view, options){
  var hexoHelpers = hexo.extend.helper.list(),
    opts = options.hash || {},
    result;

  var self = arguments[arguments.length - 1].data.root;
  result = hexoHelpers.partial.call(self, view, opts);
  return new handlebars.SafeString(result);
}};
