<?php
/**
 * Route to check the API is working
 */

function hlbapi_hello( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->code = "check_API";
  $response->message = "API is working";
  $response->data = new stdClass();
  return $response;
}
