module.exports = function(hexo) {
  var handlebars = require('handlebars'),
    hexoHelpers = hexo.extend.helper.list();

  return {
    strip_html: function(content) {
      var self = arguments[arguments.length - 1].data.root;
      return hexoHelpers.strip_html.call(self, content);
    },

    trim: function(content) {
      var self = arguments[arguments.length - 1].data.root;
      return hexoHelpers.trim.call(self, content);
    },

    titlecase: function(content) {
      var self = arguments[arguments.length - 1].data.root;
      return hexoHelpers.titlecase.call(self, content);
    },

    markdown: function(text) {
      var self = arguments[arguments.length - 1].data.root;
      var result = hexoHelpers.markdown.call(self, text);
      return new handlebars.SafeString(result);
    },

    word_wrap: function(text, width) {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
      var self = arguments[arguments.length - 1].data.root;
      return hexoHelpers.word_wrap.apply(self, args);
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

      var self = arguments[arguments.length - 1].data.root;
      return hexoHelpers.truncate.call(self, text, opts);
    }
  }
}
