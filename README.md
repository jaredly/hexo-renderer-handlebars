[Handlebars](http://handlebarsjs.com) renderer plugin for [Hexo](http://zespia.tw/hexo)
====================================
> With this plugin you can use the [handlebars](http://handlebarsjs.com/) to render theme. For Hexo 2.x

##Usage

###Install

``` bash
npm install hexo-renderer-handlebars --save
```

###Theme Development

If you use handlebars to develop themes, may need to customize helpers. You can create a folder named `helper` in the theme root, then exports all helpers to an javascript object in `index.js`.  

For example:  

```
.
├── languages
└── layout
└── helper
	└── index.js
```

`index.js`:

``` javascript
module.exports = {
  foo: function() { return 'foo.'; },
  bar: function() { return 'bar.'; }
};
```