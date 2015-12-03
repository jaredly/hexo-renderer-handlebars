module.exports = function (hexo) {
  var handlebars = require('handlebars'),
    hexoHelpers = hexo.extend.helper.list();

  return {
    is_current: function(path, strict) {
      var slice = Array.prototype.slice,
        args = slice.call(arguments, 0, arguments.length - 1),
        options = slice.call(arguments, arguments.length - 1);

      if (hexoHelpers.is_current.apply(null, args)) {
        return options.fn(this);
      }
    },

    is_home: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      if (hexoHelpers.is_home()) {
        return options.fn(this);
      }
    },

    is_post: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      if (hexoHelpers.is_post()) {
        return options.fn(this);
      }
    },

    is_archive: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      if (hexoHelpers.is_archive()) {
        return options.fn(this);
      }
    },

    is_year: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      if (hexoHelpers.is_year()) {
        return options.fn(this);
      }
    },

    is_month: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      if (hexoHelpers.is_month()) {
        return options.fn(this);
      }
    },

    is_category: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      if (hexoHelpers.is_category()) {
        return options.fn(this);
      }
    },

    is_tag: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      if (hexoHelpers.is_tag()) {
        return options.fn(this);
      }
    }
  }
}
