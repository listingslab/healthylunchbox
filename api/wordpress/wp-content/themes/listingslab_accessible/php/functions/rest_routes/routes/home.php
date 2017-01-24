<?php
/**
 * Route to return the home page content
 */

function hlbapi_home( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->code = "home";
  $response->message = "Home page content";
  $response->data = new stdClass();
  $response->data->code = 418;

  // Home page ID = 508
  $id = 508;
  $home_page = get_post($id);
  $home_page->act = get_fields($id);
  $response->data->home_page = $home_page;

  return $response;
}
