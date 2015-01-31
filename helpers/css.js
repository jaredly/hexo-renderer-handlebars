var handlebars = require('handlebars');

module.exports = function() {
  var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1),
    hexoHelpers = hexo.extend.helper.list(),
    result;

  result = hexoHelpers.css.call(this, args);
  return new handlebars.SafeString(result);
};