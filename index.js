var path = require('path')
  , fs = require('fs')
  , handlebars = require('handlebars');

require('./helpers')(hexo);

function handlebarsRenderer(data, locals) {
  var template = handlebars.compile(data.text),
    helperDir = path.join(hexo.theme_dir, 'helper');

  var partialDir = path.join(hexo.theme_dir, 'layout', 'partials')
  var partials;
  try {
    var partials = fs.readdirSync(partialDir)
  } catch (e) {
    // if this fails, there just aren't any partials. No problem.
  }
  if (partials) {
    partials.forEach(function (fname) {
      if (fname.split('.').slice(-1)[0] !== 'hbs') return
      handlebars.registerPartial(fname.split('.')[0], fs.readFileSync(path.join(partialDir, fname)).toString())
    })
  }

  var helpers = require(helperDir)(hexo);
  for (var name in locals) {
    if ('function' !== typeof locals[name]) continue
    if (name in helpers) continue
    helpers[name] = locals[name]
  }

  return template(locals, {
    helpers: helpers
  });
}

['hbs', 'handlebars'].forEach(function(extension) {
  hexo.extend.renderer.register(extension, 'html', handlebarsRenderer, true);
});

exports.handlebars = handlebars;
