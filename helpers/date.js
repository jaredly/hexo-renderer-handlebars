module.exports = function(hexo) {
  var handlebars = require('handlebars'),
    hexoHelpers = hexo.extend.helper.list();

  return {
    date: function(date, format) {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
      var self = arguments[arguments.length - 1].data.root;
      return hexoHelpers.date.apply(self, args);
    },

    date_xml: function(date) {
      var self = arguments[arguments.length - 1].data.root;
      return hexoHelpers.date_xml.call(self, date);
    },

    time: function(date, format) {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
      var self = arguments[arguments.length - 1].data.root;
      return hexoHelpers.time.apply(self, args);
    },

    full_date: function(date, format) {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
      var self = arguments[arguments.length - 1].data.root;
      return hexoHelpers.full_date.apply(self, args);
    },

    time_tag: function(date, format) {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1),
        result;
      var self = arguments[arguments.length - 1].data.root;
      result = hexoHelpers.time_tag.apply(self, args);
      return new handlebars.SafeString(result);
    },

    moment: function() {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
      var self = arguments[arguments.length - 1].data.root;
      return hexoHelpers.moment.apply(self, args);
    },
  }
}
