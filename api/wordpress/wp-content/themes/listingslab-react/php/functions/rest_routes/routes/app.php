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
  $response->data->status_info = "https://tinyurl.com/7u3ebv2";

  include 'app/special.php';
  include 'app/navigation.php';
  include 'app/home.php';
  include 'app/tips.php';
  include 'app/recipes.php';
  include 'app/about.php';
  include 'app/lunchbox.php';

  return $response;
}
