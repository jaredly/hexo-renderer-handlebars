module.exports = function(options){
  var opts = options.hash || {},
    hexoHelpers = hexo.extend.helper.list(),
    result;

  return hexoHelpers.get_posts.call(this, opts);
};
