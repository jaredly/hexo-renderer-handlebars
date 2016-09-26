module.exports = function (hexo) {
var handlebars = require('handlebars'),
  hexoHelpers = hexo.extend.helper.list();

  return {
    link_to: function(path, text, external){
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1),
        result;

      var self = arguments[arguments.length - 1].data.root;
      result = hexoHelpers.link_to.apply(self, args);
      return new handlebars.SafeString(result);
    },

    mail_to: function(path, text){
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1),
        result;

      var self = arguments[arguments.length - 1].data.root;
      result = hexoHelpers.mail_to.apply(self, args);
      return new handlebars.SafeString(result);
    },
    url_for: function(path){
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1),
        result;

      var self = arguments[arguments.length - 1].data.root;
      result = hexoHelpers.url_for.apply(self, args);
      return new handlebars.SafeString(result);
    },
    relative_url: function(from, to){
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1),
        result;

      var self = arguments[arguments.length - 1].data.root;
      result = hexoHelpers.relative_url.apply(self, args);
      return new handlebars.SafeString(result);
    }
  }
}
