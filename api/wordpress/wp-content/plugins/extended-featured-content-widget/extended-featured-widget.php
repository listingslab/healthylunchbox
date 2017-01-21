<?php
/**
 * Plugin Name: Extended Featured Widget
 * Plugin URI: http://pwdtechnology.com/extended-featured-content-widget/
 * Description: Extended Featured widget is a Wrdpress Plugin which allows support for custom post types, taxonomies, and extends the flexibility of the widget via action hooks to allow the elements to be repositioned or other elements to be added. This requires WordPress 3.0+. 
 * Author: Chinmoy Paul
 * Author URI: http://pwdtechnology.com
 * Version: 0.3
 * Requires at least: 3.0
 * Tested up to: 4.2.2
 * Text Domain: efwp
 * Domain Path /languages/
 * License: GPLv2
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/
  
/**
 * Copyright (c) 2014 Chinmoy Paul. All rights reserved.
 *
 * Released under the GPL license
 */

/* Prevent direct access to the plugin */
if ( !defined( 'ABSPATH' ) ) {
    wp_die( __( "Sorry, you are not allowed to access this page directly.", 'efwp' ) );
}
 
/** Load textdomain for translation */
load_plugin_textdomain( 'efwp', false, basename( dirname( __FILE__ ) ) . '/languages/' );

define( 'EFWP_PLUGIN_DIR', dirname( __FILE__ ) );

if ( ! current_theme_supports('post-thumbnails') ) {
  // Enable support for Post Thumbnails
	add_theme_support( 'post-thumbnails' );
}

/**
 * Used to exclude taxonomies and related terms from list of available terms/taxonomies in widget form()
 *
 * @author Chinmoy Paul
 * @since 0.1
 * @version 0.1
 * @param string $taxonomy 'taxonomy' being tested
 * @return string
 */
function efwp_exclude_taxonomies( $taxonomy ) {
    $filters = array( '', 'nav_menu', 'post_format' );
    $filters = apply_filters( 'efwp_exclude_taxonomies', $filters );
    return(!in_array( $taxonomy->name, $filters ));
}

/**
 * Generating Taxonomies List
 *
 * @author Chinmoy Paul
 * @since 0.1
 * @version 0.1
 * @param string $post_type 'post' being tested 
 * @return string
 */
function efwp_taxonomy_list( $post_type = '' ){
  if( isset($_POST['post_type']) )
    $post_type = $_POST['post_type'];
    
  if($post_type == '') return false;
  
  $taxonomy_names = get_object_taxonomies( $post_type, 'objects' );
  $taxonomy_names = array_filter( $taxonomy_names, 'efwp_exclude_taxonomies' );
  
  if( $taxonomy_names ){
    
    foreach( $taxonomy_names as $efwp_taxonomy)        
      echo '<option style="padding-right:10px;" value="'.$efwp_taxonomy->name.'" '. selected( $option_val, $instance['taxonomy'], false ) .'>'. $efwp_taxonomy->labels->singular_name .'</option>' . "\n";
        
  } 
}

/**
 * Checking current Post type have taxonomies or not
 *
 * @author Chinmoy Paul
 * @since 0.1
 * @version 0.1
 * @param string $post_type 'post' being tested 
 * @return Mixed
 */
function get_efwp_taxonomy_list( $post_type = '' ){
  if( ($post_type == '') || ( $post_type == 'none' ) ) return false;
  
  $taxonomy_names = get_object_taxonomies( $post_type, 'objects' );
  
  return $taxonomy_names;
}

/**
 * Checking current Taxonomy have terms or not
 *
 * @author Chinmoy Paul
 * @since 0.1
 * @version 0.1
 * @param string $post_type 'post' being tested 
 * @return Mixed
 */
function get_efwp_terms_list( $tax = '' ){
  if( ($tax == '') || ( $tax == 'none' ) ) return false;
  
  $terms = get_terms( $tax, 'orderby=name&hide_empty=1' );
  
  return $terms;
}
/**
 * Making thumbnail size list
 * 
 * @author Chinmoy Paul
 * @since 0.1
 * @version 0.1
 * @return array     
 */ 
function efwp_thumbnail_sizes(){
  global $_wp_additional_image_sizes;
  $sizes = $img_sizes =array();
	foreach( get_intermediate_image_sizes() as $s ){
		$sizes[ $s ] = array( 0, 0 );
		if( in_array( $s, array( 'thumbnail', 'medium', 'large' ) ) ){
			$sizes[ $s ][0] = get_option( $s . '_size_w' );
			$sizes[ $s ][1] = get_option( $s . '_size_h' );
		}else{
			if( isset( $_wp_additional_image_sizes ) && isset( $_wp_additional_image_sizes[ $s ] ) )
				$sizes[ $s ] = array( $_wp_additional_image_sizes[ $s ]['width'], $_wp_additional_image_sizes[ $s ]['height'], );
		}
	}

	foreach( $sizes as $size => $atts ){
    $size_title = ucwords(str_replace("-"," ", $size));
    $img_sizes[$size] =  $size_title . ' (' . implode( 'x', $atts ) . ')';
	}
  
  return $img_sizes;
}
/**
 * 
 * @author Chinmoy Paul
 * @since 0.1
 * @version 0.1
 * @param array $instance      
 */
function efwp_before_featured_post_content( $instance ){
  do_action('efwp_before_featured_post_content', $instance);
}
/**
 * 
 * @author Chinmoy Paul
 * @since 0.1
 * @version 0.1
 * @param array $instance      
 */
function efwp_featured_post_content( $instance ){
  do_action('efwp_featured_post_content', $instance);
}
/**
 * 
 * @author Chinmoy Paul
 * @since 0.1
 * @version 0.1
 * @param array $instance      
 */
function efwp_after_featured_post_content( $instance ){
  do_action('efwp_after_featured_post_content', $instance);
}

/**
 * Echo the limited content.
 *
 * @since 0.1
 * @version 0.1
 * @author Chinmoy Paul  
 *
 * @uses get_the_efwp_post_content_limit() Return content stripped down and limited content.
 *
 * @param integer $max_characters The maximum number of characters to return.
 * @param string  $more_text Optional. Text of the more link. Default is "(read more...)".
 * @param bool    $stripteaser    Optional. Strip teaser content before the more text. Default is false.
 */
function the_efwp_post_content_limit( $max_characters, $more_text = '(read more...)', $stripteaser = false ){
  $content = get_the_efwp_post_content_limit( $max_characters, $more_text, $stripteaser );
	echo apply_filters( 'the_efwp_post_content_limit', $content );
}

/**
 * Return content stripped down and limited content.
 *
 * Strips out tags and shortcodes, limits the output to `$max_char` characters, and appends an ellipsis and more link to the end.
 *
 * @since 0.1
 * @version 0.1
 * @author Chinmoy Paul 
 *
 * @param integer $max_characters The maximum number of characters to return.
 * @param string  $more_link_text Optional. Text of the more link. Default is "(read more...)".
 * @param bool    $stripteaser    Optional. Strip teaser content before the more text. Default is false.
 *
 * @return string Limited content.
 */
function get_the_efwp_post_content_limit( $max_characters, $more_text = '(read more...)', $stripteaser = false ) {

	$content = get_the_content( '', $stripteaser );

	//* Strip tags and shortcodes so the content truncation count is done correctly
	$content = strip_tags( strip_shortcodes( $content ), apply_filters( 'post_content_limit_allowedtags', '<script>,<style>' ) );

	//* Remove inline styles / scripts
	$content = trim( preg_replace( '#<(s(cript|tyle)).*?</\1>#si', '', $content ) );

	//* Truncate $content to $max_char
	$content = efwp_truncate_phrase( $content, $max_characters );

	//* More link?
	if ( $more_text ) {
		$link   = sprintf( '&#x02026; <a href="%s" class="more-link">%s</a>', get_permalink(), $more_text );
		$output = sprintf( '<p>%s %s</p>', $content, $link );
	} else {
		$output = sprintf( '<p>%s</p>', $content );
		$link = '';
	}

	return apply_filters( 'get_the_efwp_post_content_limit', $output, $content, $link, $max_characters );

}

/**
 * Return a phrase shortened in length to a maximum number of characters.
 *
 * If the first `$max_characters` of the string does not contain a space character, an empty string will be returned.
 *
 * @author Chinmoy Paul 
 * @since 0.1
 * @version 0.1 
 *
 * @param string $text            A string to be shortened.
 * @param integer $max_characters The maximum number of characters to return.
 *
 * @return string Truncated string
 */
function efwp_truncate_phrase( $text, $max_characters ) {

	$text = trim( $text );

	if ( mb_strlen( $text ) > $max_characters ) {
		//* Truncate $text to $max_characters + 1
		$text = mb_substr( $text, 0, $max_characters + 1 );

		//* Truncate to the last space in the truncated string
		$text = trim( mb_substr( $text, 0, mb_strrpos( $text, ' ' ) ) );
	}

	return $text;
}

// Include files
require_once(EFWP_PLUGIN_DIR . '/featured-content-widget.php');  
require_once(EFWP_PLUGIN_DIR . '/post-meta-shortcodes.php');