<?php
/**
 * Route to return the navigation
 */

function hlbapi_navigation( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->description = "Return Navigation";
  $response->status = "ok";
  return $response;
}
