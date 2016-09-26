module.exports = function(hexo) {
  var handlebars = require('handlebars'),
    hexoHelpers = hexo.extend.helper.list();

  return {
    search_form: function(options) {
      var opts = options.hash || {},
        result;

      result = hexoHelpers.search_form.call(this, opts);
      return new handlebars.SafeString(result);
    },
  }
}
