var path = require('path');
var fs = require('fs');
var handlebars = require('handlebars');

require('./helpers')(hexo);

function handlebarsRenderer(data, locals) {
  var template = handlebars.compile(data.text),
    helperDir = path.join(hexo.theme_dir, 'helper');

  var partialDir = path.join(hexo.theme_dir, 'layout', 'partials');
  var partials;
  
  try {
    partials = fs.readdirSync(partialDir);
  } catch (e) {
    // if this fails, there just aren't any partials. No problem.
  }

  if (partials) {
    partials.forEach(function (fname) {
      if (fname.split('.').slice(-1)[0] !== 'hbs') return;
      handlebars.registerPartial(fname.split('.')[0], fs.readFileSync(path.join(partialDir, fname)).toString());
    });
  }

  var helpers = {};
  try {
    helpers = require(helperDir)(hexo);
  } catch(e) {
      // no additional helpers available. No problem.
  }

  return new Promise(function (resolve, reject) {
    resolve(template(locals, {
      helpers: helpers
    }));
  });
}

handlebarsRenderer.disableNunjucks = true;

['hbs', 'handlebars'].forEach(function(extension) {
  hexo.extend.renderer.register(extension, 'html', handlebarsRenderer, false);
});

exports.handlebars = handlebars;
