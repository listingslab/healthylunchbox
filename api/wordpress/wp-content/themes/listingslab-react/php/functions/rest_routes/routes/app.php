<?php
/**
 * Returns the initial content; navigation, home page content, featured content & taxonomies
 */

function hlbapi_app( WP_REST_Request $request ) {

  $response = new stdClass();
  $response->code = "app";
  $response->message = "Initial WordPress content";
  $response->data = new stdClass();
  $response->data->status = 418;

  include 'app/navigation.php';
  include 'app/home.php';
  include 'app/tips.php';
  include 'app/recipes.php';
  include 'app/about.php';
  include 'app/lunchbox.php';

  return $response;
}
