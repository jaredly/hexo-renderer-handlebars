var handlebars = require('handlebars'),
  hexoHelpers = hexo.extend.helper.list();

exports.link_to = function(path, text, external){
  var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1),
    result;

  result = hexoHelpers.link_to.apply(null, args);
  return new handlebars.SafeString(result);
};

exports.mail_to = function(path, text){
  var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1),
    result;

  result = hexoHelpers.mail_to.apply(null, args);
  return new handlebars.SafeString(result);
};