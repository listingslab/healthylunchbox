<?php
/**
 * Route to check the API is working
 */

function hlbapi_hello( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->code = "check_API";
  $response->message = "API is working";
  $response->httpStatusCode = 418;
  $response->httpStatusCodeMessage = 'I\'m a teapot (RFC 2324 https://tools.ietf.org/html/rfc2324)';
  return $response;
}
