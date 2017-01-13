<?php

  /**
   * Register the /wp-json/hlb-api/routes
   */

  add_action( 'rest_api_init', 'hlbapi_register_routes' );
  function hlbapi_register_routes() {
  	register_rest_route( 'hlbapi', 'recipies', array(
  		'methods'  => WP_REST_Server::READABLE,
  		'callback' => 'hlbapi_recipies',
  	) );
  }

  include 'hlbapi_recipies.php';
