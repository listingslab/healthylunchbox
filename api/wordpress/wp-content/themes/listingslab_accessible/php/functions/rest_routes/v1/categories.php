<?php
/**
 * Created by Chris Dorward on 14/01/2017
 * Returns all categories for a type
 */

function hlbapi_categories( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->description = "Returns all categories for a specific taxonomy";
  $response->taxonomy = $request['taxonomy'];
  $response->status = "ok";
  $categories = get_terms( array(
    'taxonomy' => $request['taxonomy'],
    'hide_empty' => false,
  ));
  $response->data = $categories;
  return $response;
}
