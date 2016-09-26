var handlebars = require('handlebars');

module.exports = function(hexo){return function(options){
  var opts = options.hash || {},
    hexoHelpers = hexo.extend.helper.list(),
    result;

  var self = arguments[arguments.length - 1].data.root;
  result = hexoHelpers.paginator.call(self, opts);
  return new handlebars.SafeString(result);
}};
