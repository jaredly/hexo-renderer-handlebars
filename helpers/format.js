module.exports = function(hexo) {
  var handlebars = require('handlebars'),
    hexoHelpers = hexo.extend.helper.list();

  return {
    strip_html: function(content) {
      return hexoHelpers.strip_html(content);
    },

    trim: function(content) {
      return hexoHelpers.trim(content);
    },

    titlecase: function(content) {
      return hexoHelpers.titlecase(content);
    },

    markdown: function(text) {
      var result = hexoHelpers.markdown(text);
      return new handlebars.SafeString(result);
    },

    word_wrap: function(text, width) {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
      return hexoHelpers.word_wrap.apply(null, args);
    },

    truncate: function(text, length, options) {
      var opts = options.hash,
        args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);

      if (args.length < 2 && !opts) {
        return text;
      }

      if (!opts) {
        opts = {
          length: length
        };
      } else {
        if (!opts.hasOwnProperty('length')) {
          opts.length = length;
        }
      }

      return hexoHelpers.truncate(text, opts);
    },
  }
}
