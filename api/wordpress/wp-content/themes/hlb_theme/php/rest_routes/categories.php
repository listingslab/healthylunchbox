<?php
/**
 * Created by Chris Dorward on 14/01/2017
 * Returns all categories
 */

function hlbapi_categories( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->description = "Returns all categories";
  $response->status = "ok";
  $categories = get_categories( array(
    'orderby' => 'name',
    'order'   => 'ASC'
  ) );
  $response->total = count($categories);
  $response->categories = $categories;
  return $response;
}
