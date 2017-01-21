=== Plugin Name ===
Contributors: Chinmoy Paul
Author URI: http://www.pwdtechnology.com
Tags: featured post,featured post content,post,page,category,tags,post thumbnail,widget,plugin,wordpress
Version: 0.3
Requires at least: 3.0
Tested up to: 4.2.2
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Extended Featured Content Widget is a powerful, light weight wordpress plugin that helps you can organize your post/page content beautifully.

== Description ==

The **Extended Featured Content Widget** is a powerful, light weight wordpress widget. You can decide, whether or not the post thumbnail is displayed, 
whether the post title, post info, meta, content etc are above or beneath the thumbnail and a couple of more things. And of course, you can style 
the widget individually. You can filter the content by category, post tags, taxonomy. Also you can include/exclude specific terms or 
post/page specific items by ID(s). And many more features are integrated in this plugin.

**Widget Features:**

1. Supporting Post, page
2. Supporting Filter by Category, Tag
3. Include/Exclude categories/tags by ID field
4. Include/Exclude post/page items by ID field
5. Turn on or Off Post title, thumbnail, post info, content etc
6. Order by Date, ID, comment count, random
7. Supporting offset field
8. 4 Type Content option
    * Full Content 
    * Excerpt 
    * Content by Character Limit 
    * No Content
9. Multiple Hooks and Filters for adding additional content
10. Select featured image size from drop down
11. Select Image alignment and Image position

**Shortcodes Syntax for Post Info & Meta**

* Post Date

`[post_date after="" before="" label="" format="DATE FORMAT"]`

* Post Time

`[post_time after="" before="" label="" format="TIME FORMAT"]`
 
* Post Author Name

`[post_author after="" before=""]`

* Post Author Name with Author Site link

`[post_author_link after="" before=""]`

* Post Author Name with Author Archive link

`[post_author_posts_link after="" before=""]`

* Post Comments Number

`[post_comments after="" before="" more='% Comments' one='1 Comment' zero='Leave a Comment']`

* Post Tags

`[post_tags after="" before="Tagged With" sep=', ']`

* Post Categories

`[post_categories after="" before="Filed In" sep=', ']`


**How it is working**

Here is the some examples:

1. [3 Columns Grid Style](http://pwdtechnology.com/grid-view-template-twenty-fourteen-theme-using-efcwp-plugin/ "3 Columns Grid Style")
2. [Featured Content on Home Page](http://pwdtechnology.com/creating-extra-widget-area-home-page-twenty-fourteen-theme/ "Featured Content on Home Page")
3. [Custom Post Type Demo](http://pwdtechnology.com/displaying-custom-post-type-content-using-efcwp-plugin/ "Custom Post Type Demo")

This plugin is using lot of hooks and filters. Here is the list of those Hooks & Filters

**Hooks**

* efwp_before_loop
* efwp_before_featured_post_content
* efwp_featured_post_content
* efwp_after_featured_post_content
* efwp_inside_loop
* efwp_after_loop

**Filters**

* post_content_limit_allowedtags
* get_the_efwp_post_content_limit
* the_efwp_post_content_limit
* efwp_do_post_meta
* efwp_do_post_info
* efwp_post_date_shortcode
* efwp_post_time_shortcode
* efwp_post_author_shortcode
* efwp_post_author_link_shortcode
* efwp_post_author_posts_link_shortcode
* efwp_post_comments_shortcode
* efwp_post_tags_shortcode
* efwp_post_categories_shortcode

**PRO Version have following features:**

1. Supporting Post, page, custom post type
2. Supporting Taxonomies
3. Added Stylesheet
4. Supporting Grid Style
5. Pagination for Post Listings

Any suggestion highly appreciable.


== Installation ==
First download the zip file. Then login to Dashboard and go to add new plugin page (Plugins-Add New). Click on upload link, browse the zip file 
and then hit on install now button. Now activate the plugin. After activating the plugin you will get Extended Featured Widget at 
Widgets page ( Appearance – Widgets). Drag & drop the widget in your widget area and setup the widget settings. Now you will get the content on 
your site based on widget settings. That's it.

== Screenshots ==
1. Plugin Cover
2. Extended Featured Widget.
3. Widget Setup At Dashboard.
4. Output of Front End.

== Frequently Asked Questions ==

== Changelog ==

= 0.3 - 10/28/2015 =
* Fixed deprecated function WP_Widget 

= 0.1 =
*Initial Release 