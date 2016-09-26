var handlebars = require('handlebars');

module.exports = function (hexo) {

  /**
  * Hexo `css` helper.
  * {{css path [path1] [path2] [...]}}
  * Examples:
  *    {{css 'style.css'}}
  *    {{css 'style.css' 'screen.css'}}
  */
  handlebars.registerHelper('css', require('./css')(hexo));

  var date = require('./date')(hexo);
  /**
  * Hexo `date` helper.
  * {{date date [format]}}
  * Examples:
  *    {{date Date.now()}}
  *    {{date Date.now() 'YYYY/M/D'}}
  */
  handlebars.registerHelper('date', date.date);
  /**
  * Hexo `date_xml` helper.
  * {{date_xml date}}
  * Examples:
  *    {{date_xml Date.now()}}
  */
  handlebars.registerHelper('date_xml', date.date_xml);
  /**
  * Hexo `time` helper.
  * {{time date [format]}}
  * Examples:
  *    {{time Date.now()}}
  *    {{time Date.now() 'h:mm:ss a'}}
  */
  handlebars.registerHelper('time', date.time);
  /**
  * Hexo `full_date` helper.
  * {{full_date date [format]}}
  * Examples:
  *    {{full_date new Date()}}
  *    {{full_date new Date() 'dddd, MMMM Do YYYY, h:mm:ss a'}}
  */
  handlebars.registerHelper('full_date', date.full_date);
  /**
  * Hexo `time_tag` helper.
  * {{time_tag date [format]}}
  * Examples:
  *    {{time_tag Date.now()}}
  *    {{time_tag Date.now() 'YYYY/M/D'}}
  */
  handlebars.registerHelper('time_tag', date.time_tag);
  /**
  * Hexo `moment` helper.
  * [Moment.js] library.
  */
  handlebars.registerHelper('moment', date.moment);

  var form = require('./form')(hexo);
  /**
  * Hexo `search_form` helper.
  * {{search_form [class='search-form'] [text='Search'] [button=false]}}
  * Examples:
  *    {{search_form}}
  *    {{search_form class='footer-search-form' text='Input a keyword' button=true}}
  */
  handlebars.registerHelper('search_form', form.search_form);

  var format = require('./format')(hexo);
  /**
  * Hexo `strip_html` helper.
  * {{strip_html string}}
  * Examples:
  *    {{strip_html 'It's not <b>important</b> anymore!'}}
  */
  handlebars.registerHelper('strip_html', format.strip_html);
  /**
  * Hexo `trim` helper.
  * {{trim string}}
  */
  handlebars.registerHelper('trim', format.trim);
  /**
  * Hexo `titlecase` helper.
  * {{titlecase string}}
  * Examples:
  *    {{titlecase 'this is an apple'}}
  */
  handlebars.registerHelper('titlecase', format.titlecase);
  /**
  * Hexo `markdown` helper.
  * {{markdown string}}
  * Examples:
  *    {{markdown 'make me **strong**'}}
  */
  handlebars.registerHelper('markdown', format.markdown);
  /**
  * Hexo `word_wrap` helper.
  * {{word_wrap str [length]}}
  * Examples:
  *    {{word_wrap 'Once upon a time' 8}}
  */
  handlebars.registerHelper('word_wrap', format.word_wrap);
  /**
  * Hexo `truncate` helper.
  * {{truncate string length [omission='...'] [seperator='']}}
  * Examples:
  *    {{truncate 'Once upon a time in a world far far away' 16}}
  */
  handlebars.registerHelper('truncate', format.truncate);

  /**
  * Hexo `gravatar` helper.
  * {{gravater email [size]}}
  * Examples:
  *    {{gravatar 'a@abc.com'}}
  *    {{gravatar 'a@abc.com' 40}}
  */
  handlebars.registerHelper('gravatar', require('./gravatar')(hexo));

  var is = require('./is')(hexo);
  /**
  * Hexo `is_current` helper.
  * {{#is_current path [strict]}}
  *   template logic
  * {{/is_current}}
  */
  handlebars.registerHelper('is_current', is.is_current);
  /**
  * Hexo `is_home` helper.
  * {{#is_home}}
  *   template logic
  * {{/is_home}}
  */
  handlebars.registerHelper('is_home', is.is_home);
  /**
  * Hexo `is_post` helper.
  * {{#is_post}}
  *   template logic
  * {{/is_post}}
  */
  handlebars.registerHelper('is_post', is.is_post);
  /**
  * Hexo `is_archive` helper.
  * {{#is_archive}}
  *   template logic
  * {{/is_archive}}
  */
  handlebars.registerHelper('is_archive', is.is_archive);
  /**
  * Hexo `is_year` helper.
  * {{#is_year}}
  *   template logic
  * {{/is_year}}
  */
  handlebars.registerHelper('is_year', is.is_year);
  /**
  * Hexo `is_month` helper.
  * {{#is_month}}
  *   template logic
  * {{/is_month}}
  */
  handlebars.registerHelper('is_month', is.is_month);
  /**
  * Hexo `is_category` helper.
  * {{#is_category}}
  *   template logic
  * {{/is_category}}
  */
  handlebars.registerHelper('is_category', is.is_category);
  /**
  * Hexo `is_tag` helper.
  * {{#is_tag}}
  *   template logic
  * {{/is_tag}}
  */
  handlebars.registerHelper('is_tag', is.is_tag);

  /**
  * Hexo `js` helper.
  * {{js path [path1] [path2] [...]}}
  * Examples:
  *    {{js 'script.js'}}
  *    {{js 'script.js' 'gallery.js'}}
  */
  handlebars.registerHelper('js', require('./js')(hexo));

  var link = require('./link')(hexo);
  /**
  * Hexo `link_to` helper.
  * {{link_to path [text] [external]}}
  * Examples:
  *    {{link_to 'http://www.google.com'}}
  *    {{link_to 'http://www.google.com' 'Google'}}
  *    {{link_to 'http://www.google.com' 'Google' true}}
  */
  handlebars.registerHelper('link_to', link.link_to);
  /**
  * Hexo `mail_to` helper.
  * {{mail_to path [text]}}
  * Examples:
  *    {{mail_to 'a@abc.com'}}
  *    {{mail_to 'a@abc.com' 'Email'}}
  */
  handlebars.registerHelper('mail_to', link.mail_to);

  var number = require('./number');
  /**
  * Hexo `number_format` helper.
  * {{number_format num [precision=false] [delimiter=','] [separator='.']}}
  * Examples:
  *    {{number_format 12345.67 precision=1}}
  *    {{number_format 12345.67 delimiter=''}}
  *    {{number_format 12345.67 separator='/'}}
  */
  handlebars.registerHelper('number_format', number.number_format(hexo));

  /**
  * Hexo `paginator` helper
  * {{paginator [base='/'] [format='page/%d/'] [...]}}
  */
  handlebars.registerHelper('paginator', require('./paginator')(hexo));

  /**
  * Hexo `partial` helper.
  * {{partial layout [locals hash]}}
  */
  handlebars.registerHelper('partial', require('./partial')(hexo));

  /**
  * Hexo `tagcloud` helper.
  * {{tagcloud [tags] [min_font=10] [max_font=20] [...]}}
  */
  handlebars.registerHelper('tagcloud', require('./tagcloud')(hexo));
}
