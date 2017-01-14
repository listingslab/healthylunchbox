<?php
/**
 * Route to check the API is working
 */
 
function hlbapi_hello( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->description = "Check the API is working";
  $response->status = "ok";
  return $response;
}
