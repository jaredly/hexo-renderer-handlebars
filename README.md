[Handlebars](http://handlebarsjs.com) renderer plugin for [Hexo](http://zespia.tw/hexo)
====================================
> With this plugin you can use the [handlebars](http://handlebarsjs.com/) to render your theme. For Hexo 3.x

##Usage

###Install

``` bash
npm install hexo-renderer-handlebars --save
```

###Theme Development

#### Helpers & Partials

If you use handlebars to develop themes, you may need to customize helpers. You can create a folder named `helper` in the theme root, then exports all helpers to an javascript object in `index.js`.  

For example:  

```
.
├── languages
└── layout
	└── partials
		└── footer.hbs
└── helper
	└── index.js
```

`index.js`:

``` javascript
var moment = require('moment');

module.exports = function(hexo) {
  return {

    calendarDate: function(date) {
      date = Date.parse(date.toString());
      return moment(date).calendar();
    },

  };
};
```

For partials, put them in a `partials` function under the `layout`, and you will be able to use them normally.

`footer.hbs`:

``` handlebars
<div>{{theme.author}} Something down here</div>
```
