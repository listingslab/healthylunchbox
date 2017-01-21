<?php

	// Add support for thumbnails
	add_theme_support( 'recipe-thumbnails' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'menus' );

	// Register the /wp-json/hlb-api/routes
	include 'php/functions/rest_routes/register_routes.php';

	// Cleans up the post editing interface
	include 'php/functions/cleanup.php';


	function listingslab_theme_setup() {
	  register_nav_menus( array(
	    'header' => 'Healthy Lunch Box Top menu'
	  ) );
	 }
	add_action( 'after_setup_theme', 'listingslab_theme_setup' );


	function my_login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/img/logo.png);
            padding-bottom: 30px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );

function my_login_logo_url() {
    return home_url();
}
add_filter( 'login_headerurl', 'my_login_logo_url' );
