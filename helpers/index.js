/**
 * Hexo `css` helper.
 * {{css path [path1] [path2] [...]}}
 * Examples:
 *    {{css 'style.css'}}
 *    {{css 'style.css' 'screen.css'}}
 */
exports.css = require('./css');

var date = require('./date');
/**
 * Hexo `date` helper.
 * {{date date [format]}}
 * Examples:
 *    {{date Date.now()}}
 *    {{date Date.now() 'YYYY/M/D'}}
 */
exports.date = date.date;
/**
 * Hexo `date_xml` helper.
 * {{date_xml date}}
 * Examples:
 *    {{date_xml Date.now()}}
 */
exports.date_xml = date.date_xml;
/**
 * Hexo `time` helper.
 * {{time date [format]}}
 * Examples:
 *    {{time Date.now()}}
 *    {{time Date.now() 'h:mm:ss a'}}
 */
exports.time = date.time;
/**
 * Hexo `full_date` helper.
 * {{full_date date [format]}}
 * Examples:
 *    {{full_date new Date()}}
 *    {{full_date new Date() 'dddd, MMMM Do YYYY, h:mm:ss a'}}
 */
exports.full_date = date.full_date;
/**
 * Hexo `time_tag` helper.
 * {{time_tag date [format]}}
 * Examples:
 *    {{time_tag Date.now()}}
 *    {{time_tag Date.now() 'YYYY/M/D'}}
 */
exports.time_tag = date.time_tag;
/**
 * Hexo `moment` helper.
 * [Moment.js] library.
 */
exports.moment = date.moment;

var form = require('./form');
/**
 * Hexo `search_form` helper.
 * {{search_form [class='search-form'] [text='Search'] [button=false]}}
 * Examples:
 *    {{search_form}}
 *    {{search_form class='footer-search-form' text='Input a keyword' button=true}}
 */
exports.search_form = form.search_form;

var format = require('./format');
/**
 * Hexo `strip_html` helper.
 * {{strip_html string}}
 * Examples:
 *    {{strip_html 'It's not <b>important</b> anymore!'}}
 */
exports.strip_html = format.strip_html;
/**
 * Hexo `trim` helper.
 * {{trim string}}
 */
exports.trim = format.trim;
/**
 * Hexo `titlecase` helper.
 * {{titlecase string}}
 * Examples:
 *    {{titlecase 'this is an apple'}}
 */
exports.titlecase = format.titlecase;
/**
 * Hexo `markdown` helper.
 * {{markdown string}}
 * Examples:
 *    {{markdown 'make me **strong**'}}
 */
exports.markdown = format.markdown;
/**
 * Hexo `word_wrap` helper.
 * {{word_wrap str [length]}}
 * Examples:
 *    {{word_wrap 'Once upon a time' 8}}
 */
exports.word_wrap = format.word_wrap;
/**
 * Hexo `truncate` helper.
 * {{truncate string length [omission='...'] [seperator='']}}
 * Examples:
 *    {{truncate 'Once upon a time in a world far far away' 16}}
 */
exports.truncate = format.truncate;

/**
 * Hexo `gravatar` helper.
 * {{gravater email [size]}}
 * Examples:
 *    {{gravatar 'a@abc.com'}}
 *    {{gravatar 'a@abc.com' 40}}
 */
exports.gravatar = require('./gravatar');

var is = require('./is');
/**
 * Hexo `is_current` helper.
 * {{#is_current path [strict]}}
 *   template logic
 * {{/is_current}}
 */
exports.is_current = is.is_current;
/**
 * Hexo `is_home` helper.
 * {{#is_home}}
 *   template logic
 * {{/is_home}}
 */
exports.is_home = is.is_home;
/**
 * Hexo `is_post` helper.
 * {{#is_post}}
 *   template logic
 * {{/is_post}}
 */
exports.is_post = is.is_post;
/**
 * Hexo `is_archive` helper.
 * {{#is_archive}}
 *   template logic
 * {{/is_archive}}
 */
exports.is_archive = is.is_archive;
/**
 * Hexo `is_year` helper.
 * {{#is_year}}
 *   template logic
 * {{/is_year}}
 */
exports.is_year = is.is_year;
/**
 * Hexo `is_month` helper.
 * {{#is_month}}
 *   template logic
 * {{/is_month}}
 */
exports.is_month = is.is_month;
/**
 * Hexo `is_category` helper.
 * {{#is_category}}
 *   template logic
 * {{/is_category}}
 */
exports.is_category = is.is_category;
/**
 * Hexo `is_tag` helper.
 * {{#is_tag}}
 *   template logic
 * {{/is_tag}}
 */
exports.is_tag = is.is_tag;

/**
 * Hexo `js` helper.
 * {{js path [path1] [path2] [...]}}
 * Examples:
 *    {{js 'script.js'}}
 *    {{js 'script.js' 'gallery.js'}}
 */
exports.js = require('./js');

var link = require('./link');
/**
 * Hexo `link_to` helper.
 * {{link_to path [text] [external]}}
 * Examples:
 *    {{link_to 'http://www.google.com'}}
 *    {{link_to 'http://www.google.com' 'Google'}}
 *    {{link_to 'http://www.google.com' 'Google' true}}
 */
exports.link_to = link.link_to;
/**
 * Hexo `mail_to` helper.
 * {{mail_to path [text]}}
 * Examples:
 *    {{mail_to 'a@abc.com'}}
 *    {{mail_to 'a@abc.com' 'Email'}}
 */
exports.mail_to = link.mail_to;

var number = require('./number');
/**
 * Hexo `number_format` helper.
 * {{number_format num [precision=false] [delimiter=','] [separator='.']}}
 * Examples:
 *    {{number_format 12345.67 precision=1}}
 *    {{number_format 12345.67 delimiter=''}}
 *    {{number_format 12345.67 separator='/'}}
 */
exports.number_format = number.number_format;

/**
 * Hexo `paginator` helper
 * {{paginator [base='/'] [format='page/%d/'] [...]}}
 */
exports.paginator = require('./paginator');

/**
 * Hexo `partial` helper.
 * {{partial layout [locals hash]}}
 */
exports.partial = require('./partial');

/**
 * Hexo `tagcloud` helper.
 * {{tagcloud [tags] [min_font=10] [max_font=20] [...]}}
 */
exports.tagcloud = require('./tagcloud');

/**
 * Hexo `get_posts` helper.
 * {{get_posts [site] [options]}}
 */
exports.get_posts = require('./get_posts');