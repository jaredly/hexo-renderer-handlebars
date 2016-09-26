
exports.number_format = function(hexo){return function(num, options){
  var hexoHelpers = hexo.extend.helper.list();
  var opts = options.hash || {};
  var self = arguments[arguments.length - 1].data.root;
  return hexoHelpers.number_format.call(self, num, opts);
}};
