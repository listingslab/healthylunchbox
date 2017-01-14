<?php
/**
 * Blank Template for new route function
 */

function hlbapi_blank( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->description = "Blank Description";
  $response->status = "ok";
  }
  return $response;
}
