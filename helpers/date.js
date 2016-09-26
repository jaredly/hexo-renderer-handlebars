module.exports = function(hexo) {
  var handlebars = require('handlebars'),
    hexoHelpers = hexo.extend.helper.list();

  return {
    date: function(date, format) {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
      return hexoHelpers.date.apply(this, args);
    },

    date_xml: function(date) {
      return hexoHelpers.date_xml.call(this, date);
    },

    time: function(date, format) {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
      return hexoHelpers.time.apply(this, args);
    },

    full_date: function(date, format) {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
      return hexoHelpers.full_date.apply(this, args);
    },

    time_tag: function(date, format) {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1),
        result;
      result = hexoHelpers.time_tag.apply(this, args);
      return new handlebars.SafeString(result);
    },

    moment: function() {
      var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
      return hexoHelpers.moment.apply(this, args);
    },
  }
}
