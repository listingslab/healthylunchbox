<?php
  /**
   * Register routes for  /wp-json/hlb-api/
   */
  add_action( 'rest_api_init', 'hlbapi_register_routes' );
  function hlbapi_register_routes() {
    register_rest_route( 'hlbapi', '/hello', array(
  		'methods'  => WP_REST_Server::READABLE,
  		'callback' => 'hlbapi_hello',
  	) );
    register_rest_route( 'hlbapi', '/categories', array(
  		'methods'  => WP_REST_Server::READABLE,
  		'callback' => 'hlbapi_categories',
  	) );
  	register_rest_route( 'hlbapi', '/recipies', array(
  		'methods'  => WP_REST_Server::READABLE,
  		'callback' => 'hlbapi_recipies',
  	) );
    register_rest_route( 'hlbapi', '/recipe/(?P<id>\d+)', array(
  		'methods'  => WP_REST_Server::READABLE,
  		'callback' => 'hlbapi_recipe',
  	) );
  }
  include 'categories.php';
  include 'hello.php';
  include 'recipe.php';
  include 'recipies.php';
