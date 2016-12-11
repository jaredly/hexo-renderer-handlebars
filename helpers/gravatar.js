var handlebars = require('handlebars');

module.exports = function(hexo){return function() {
  var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1),
    hexoHelpers = hexo.extend.helper.list(),
    result;

  var self = arguments[arguments.length - 1].data.root;
  result = hexoHelpers.gravatar.apply(self, args);
  return new handlebars.SafeString(result);
}};
