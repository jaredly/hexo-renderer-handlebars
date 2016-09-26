module.exports = function (hexo) {
  var handlebars = require('handlebars'),
    hexoHelpers = hexo.extend.helper.list();

  return {
    is_current: function(path, strict) {
      var slice = Array.prototype.slice,
        args = slice.call(arguments, 0, arguments.length - 1),
        options = slice.call(arguments, arguments.length - 1);

      var self = arguments[arguments.length - 1].data.root;
      if (hexoHelpers.is_current.apply(self, args)) {
        return options.fn(this);
      }
    },

    is_home: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      var self = arguments[arguments.length - 1].data.root;
      if (hexoHelpers.is_home.call(self)) {
        return options.fn(this);
      }
    },

    is_post: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      var self = arguments[arguments.length - 1].data.root;
      if (hexoHelpers.is_post.call(self)) {
        return options.fn(this);
      }
    },

    is_archive: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      var self = arguments[arguments.length - 1].data.root;
      if (hexoHelpers.is_archive.call(self)) {
        return options.fn(this);
      }
    },

    is_year: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      var self = arguments[arguments.length - 1].data.root;
      if (hexoHelpers.is_year.call(self)) {
        return options.fn(this);
      }
    },

    is_month: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      var self = arguments[arguments.length - 1].data.root;
      if (hexoHelpers.is_month.call(self)) {
        return options.fn(this);
      }
    },

    is_category: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      var self = arguments[arguments.length - 1].data.root;
      if (hexoHelpers.is_category.call(self)) {
        return options.fn(this);
      }
    },

    is_tag: function() {
      var slice = Array.prototype.slice,
        options = slice.call(arguments, arguments.length - 1);

      var self = arguments[arguments.length - 1].data.root;
      if (hexoHelpers.is_tag.call(self)) {
        return options.fn(this);
      }
    }
  }
}
