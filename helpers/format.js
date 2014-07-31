var handlebars = require('handlebars'),
  hexoHelpers = hexo.extend.helper.list();

exports.strip_html = function(content) {
  return hexoHelpers.strip_html(content);
};

exports.trim = function(content) {
  return hexoHelpers.trim(content);
};

exports.titlecase = function(content) {
  return hexoHelpers.titlecase(content);
};

exports.markdown = function(text) {
  var result = hexoHelpers.markdown(text);
  return new handlebars.SafeString(result);
};

exports.word_wrap = function(text, width) {
  var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
  return hexoHelpers.word_wrap.apply(null, args);
};

exports.truncate = function(text, length, options) {
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
};