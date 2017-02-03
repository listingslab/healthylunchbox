<?php
/**
 * ListingslabReact functions and definitions
 *
 * @link http;//listingslab.com/listingslabreact
 *
 * @package WordPress
 * @subpackage ListingslabReact
 * @since 1.0
 */

 // Instatiate ListingslabReact
 include 'php/config.php';

 // Register the /wp-json/hlb-api/routes
 include 'php/functions/rest_routes/register_routes.php';


function register_navigation() {
  register_nav_menu('navigation',__( 'Navigation' ));
}
add_action( 'init', 'register_navigation' );
