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
    register_rest_route( 'hlbapi', '/navigation', array(
  		'methods'  => WP_REST_Server::READABLE,
  		'callback' => 'hlbapi_navigation',
  	) );
    register_rest_route( 'hlbapi', '/categories', array(
  		'methods'  => WP_REST_Server::READABLE,
  		'callback' => 'hlbapi_categories',
  	) );
  	register_rest_route( 'hlbapi', '/recipes', array(
  		'methods'  => WP_REST_Server::READABLE,
  		'callback' => 'hlbapi_recipes',
  	) );
    register_rest_route( 'hlbapi', '/recipe/(?P<id>\d+)', array(
  		'methods'  => WP_REST_Server::READABLE,
  		'callback' => 'hlbapi_recipe',
  	) );

    register_rest_route( 'hlbapi', '/tips', array(
  		'methods'  => WP_REST_Server::READABLE,
  		'callback' => 'hlbapi_tips',
  	) );

  }
  include 'categories.php';
  include 'hello.php';
  include 'recipe.php';
  include 'recipes.php';
  include 'tips.php';
  include 'navigation.php';
