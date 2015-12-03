
exports.number_format = function(hexo){return function(num, options){
  var hexoHelpers = hexo.extend.helper.list();
  var opts = options.hash || {};
  return hexoHelpers.number_format(num, opts);
}};
