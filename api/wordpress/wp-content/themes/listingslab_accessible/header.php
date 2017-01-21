<?php
/**
 * The header template
 *
 * @package Octothorpe
 * @subpackage Templates
 */
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<!--

Level AAA Conformance to Web Content Accessibility Guidelines 2.0
Level A conformance icon, W3C-WAI Web Content Accessibility Guidelines 2.0

Pages bearing this logo indicate a claim of conformance by the page author or content
provider to conformance Level AAA of the W3C Web Content Accessibility Guidelines 2.0,
including all Level A, AA, and AAA success criteria defined in the Guidelines.

The Web Content Accessibility Guidelines 2.0 explain how to make Web content accessible
to people with disabilities. Conformance to these guidelines will help make the Web more
accessible to users with disabilities and will benefit all users.

Claims are not verified by W3C. Content providers are solely responsible for the use of these logos.
-->
	<head>
		<meta charset="<?php echo esc_attr( get_bloginfo( 'charset' ) ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'octothorpe' ); ?></a>
		<?php if ( function_exists( 'the_custom_logo' ) ) {
			the_custom_logo();
		} ?>
		<footer>
		<div id="content" class="site-content">
			<?php wp_nav_menu(
				array(
					'theme_location' => 'footer',
					'depth'          => 1,
					'fallback_cb'    => false,
					'container'      => false,
					'items_wrap'     => '<nav role="navigation"><ul id="%1$s" class="%2$s">%3$s</ul></nav>'
				)
			); ?>
		</footer>
		
