<?php
/**
 * Return all tags and categories
 */

function hlbapi_categories_tags( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->description = "Returns all tags and categories";
  $response->status = "ok";
  $categories = get_categories( array(
    'orderby' => 'name',
    'order'   => 'ASC'
  ) );
  $response->categories = $categories;
  return $response;
}
