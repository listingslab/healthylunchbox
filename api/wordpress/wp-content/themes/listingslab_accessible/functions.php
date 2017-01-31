<?php
/**
 * The functionality
 *
 * @package listingslab
 * @subpackage Functions
 */

// instatiate listingslab
include 'php/config.php';

// Register the /wp-json/hlb-api/routes
include 'php/functions/rest_routes/register_routes.php';


function register_navigation() {
  register_nav_menu('navigation',__( 'Navigation' ));
}
add_action( 'init', 'register_navigation' );

/**/
