<?php
/****************************************************************************
 * Post Meta Related Shortcodes
 ****************************************************************************/
 /**
  * Display Publish Date
  *   
  * @author Chinmoy Paul
  * @since 1.0
  * @version 1.0      
  */   
add_shortcode( 'post_date', 'efwp_post_date_shortcode' );
function efwp_post_date_shortcode( $atts ) {

	$defaults = array(
		'after'  => '',
		'before' => '',
		'format' => get_option( 'date_format' ),
		'label'  => '',
	);
  
  $atts = shortcode_atts( $defaults, $atts, 'post_date' );
  
  $display =  get_the_time( $atts['format'] );
  
	$atts = shortcode_atts( $defaults, $atts, 'post_date' );
  $output = sprintf( '<time class="%s">', 'entry-time' ) . $atts['before'] . $atts['label'] . $display . $atts['after'] . '</time>';

	return apply_filters( 'efwp_post_date_shortcode', $output, $atts );

}
/**
  * Display Publish Date
  *   
  * @author Chinmoy Paul
  * @since 1.0
  * @version 1.0      
  */ 
add_shortcode( 'post_time', 'efwp_post_time_shortcode' ); 
function efwp_post_time_shortcode( $atts ) {

	$defaults = array(
		'after'  => '',
		'before' => '',
		'format' => get_option( 'time_format' ),
		'label'  => '',
	);

	$atts = shortcode_atts( $defaults, $atts, 'post_time' );
  $output = sprintf( '<time class="%s">', 'entry-time' ) . $atts['before'] . $atts['label'] . get_the_time( $atts['format'] ) . $atts['after'] . '</time>';

	return apply_filters( 'efwp_post_time_shortcode', $output, $atts );

}
/**
  * Display Post Author Name
  *   
  * @author Chinmoy Paul
  * @since 1.0
  * @version 1.0      
  */ 
add_shortcode( 'post_author', 'efwp_post_author_shortcode' );
function efwp_post_author_shortcode( $atts ) {

	$defaults = array(
		'after'  => '',
		'before' => '',
	);

	$atts = shortcode_atts( $defaults, $atts, 'post_author' );

	$author = get_the_author();

  $output  = sprintf( '<span class="%s">', 'entry-author' );
  $output .= $atts['before'];
  $output .= sprintf( '<span class="%s">', 'entry-author-name' ) . esc_html( $author ) . '</span>';
  $output .= $atts['after'];
  $output .= '</span>';

	return apply_filters( 'efwp_post_author_shortcode', $output, $atts );

}
/**
  * Display Post Author Name with Author Site link
  *   
  * @author Chinmoy Paul
  * @since 1.0
  * @version 1.0      
  */ 
add_shortcode( 'post_author_link', 'efwp_post_author_link_shortcode' );
function efwp_post_author_link_shortcode( $atts ) {

	$defaults = array(
		'after'    => '',
		'before'   => '',
	);

	$atts = shortcode_atts( $defaults, $atts, 'post_author_link' );

	$url = get_the_author_meta( 'url' );

	//* If no url, use post author shortcode function.
	if ( ! $url )
		return efwp_post_author_shortcode( $atts );

	$author = get_the_author();

	$output  = sprintf( '<span class="%s">', 'entry-author' );
	$output .= $atts['before'];
	$output .= sprintf( '<a href="%s" class="%s">', $url, 'entry-author-link' );
	$output .= sprintf( '<span class="%s">', 'entry-author-name' );
	$output .= esc_html( $author );
	$output .= '</span></a>' . $atts['after'] . '</span>';

	return apply_filters( 'efwp_post_author_link_shortcode', $output, $atts );

}
/**
  * Display Post Author Name with Author Archive link
  *   
  * @author Chinmoy Paul
  * @since 1.0
  * @version 1.0      
  */ 
add_shortcode( 'post_author_posts_link', 'efwp_post_author_posts_link_shortcode' );
function efwp_post_author_posts_link_shortcode( $atts ) {

	$defaults = array(
		'after'  => '',
		'before' => '',
	);

	$atts = shortcode_atts( $defaults, $atts, 'post_author_posts_link' );

	$author = get_the_author();
	$url    = get_author_posts_url( get_the_author_meta( 'ID' ) );

	$output  = sprintf( '<span class="%s">', 'entry-author' );
	$output .= $atts['before'];
	$output .= sprintf( '<a href="%s" class="%s">', $url, 'entry-author-link' );
	$output .= sprintf( '<span class="%s">', 'entry-author-name' );
	$output .= esc_html( $author );
	$output .= '</span></a>' . $atts['after'] . '</span>';

return apply_filters( 'efwp_post_author_posts_link_shortcode', $output, $atts );

}
/**
  * Display Post Comments Number
  *   
  * @author Chinmoy Paul
  * @since 1.0
  * @version 1.0      
  */
add_shortcode( 'post_comments', 'efwp_post_comments_shortcode' );
function efwp_post_comments_shortcode( $atts ) {

	$defaults = array(
		'after'       => '',
		'before'      => '',
		'hide_if_off' => 'enabled',
		'more'        => __( '% Comments', 'efwp' ),
		'one'         => __( '1 Comment', 'efwp' ),
		'zero'        => __( 'Leave a Comment', 'efwp' ),
	);
	$atts = shortcode_atts( $defaults, $atts, 'post_comments' );

	if ( ! comments_open() && 'enabled' === $atts['hide_if_off'] )
		return;

	// Darn you, WordPress!
	ob_start();
	comments_number( $atts['zero'], $atts['one'], $atts['more'] );
	$comments = ob_get_clean();

	$comments = sprintf( '<a href="%s">%s</a>', get_comments_link(), $comments );

	$output = sprintf('<span class="entry-comments-link">' . $atts['before'] . $comments . $atts['after'] . '</span>');

	return apply_filters( 'efwp_post_comments_shortcode', $output, $atts );

}
/**
  * Display Post Tags
  *   
  * @author Chinmoy Paul
  * @since 1.0
  * @version 1.0      
  */
add_shortcode( 'post_tags', 'efwp_post_tags_shortcode' );
function efwp_post_tags_shortcode( $atts ) {

	$defaults = array(
		'after'  => '',
		'before' => __( 'Tagged With: ', 'efwp' ),
		'sep'    => ', ',
	);
	$atts = shortcode_atts( $defaults, $atts, 'post_tags' );

	$tags = get_the_tag_list( $atts['before'], trim( $atts['sep'] ) . ' ', $atts['after'] );

	//* Do nothing if no tags
	if ( ! $tags )
		return;

	$output = sprintf( '<span class="%s">', 'entry-tags' ) . $tags . '</span>';

	return apply_filters( 'efwp_post_tags_shortcode', $output, $atts );

}
/**
  * Display Post Categories
  *   
  * @author Chinmoy Paul
  * @since 1.0
  * @version 1.0      
  */
add_shortcode( 'post_categories', 'efwp_post_categories_shortcode' );
function efwp_post_categories_shortcode( $atts ) {

	$defaults = array(
		'sep'    => ', ',
		'before' => __( 'Filed In: ', 'efwp' ),
		'after'  => '',
	);

	$atts = shortcode_atts( $defaults, $atts, 'post_categories' );

	$cats = get_the_category_list( trim( $atts['sep'] ) . ' ' );

	$output = sprintf( '<span class="%s">', 'entry-categories' ) . $atts['before'] . $cats . $atts['after'] . '</span>';

	return apply_filters( 'efwp_post_categories_shortcode', $output, $atts );

}