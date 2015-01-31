var hexoHelpers = hexo.extend.helper.list();

exports.number_format = function(num, options){
  var opts = options.hash || {};
  return hexoHelpers.number_format.call(this, num, opts);
};