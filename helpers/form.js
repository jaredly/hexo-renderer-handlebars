module.exports = function(hexo) {
  var handlebars = require('handlebars'),
    hexoHelpers = hexo.extend.helper.list();

  return {
    search_form: function(options) {
      var opts = options.hash || {},
        result;

      var self = arguments[arguments.length - 1].data.root;
      result = hexoHelpers.search_form.call(self, opts);
      return new handlebars.SafeString(result);
    },
  }
}
