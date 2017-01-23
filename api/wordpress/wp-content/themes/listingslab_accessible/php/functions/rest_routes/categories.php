<?php
/**
 * Created by Chris Dorward on 14/01/2017
 * Returns all categories for a type
 */

function hlbapi_categories( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->description = "Returns all categories";
  $response->status = "ok";
  $response->data = array();
  $recipe_categories = get_terms( array(
    'taxonomy' => 'recipe_categories',
    'hide_empty' => false,
  ));
  $response->recipe_categories = $recipe_categories;
  $tip_categories = get_terms( array(
    'taxonomy' => 'tip_categories',
    'hide_empty' => false,
  ));
  $response->tip_categories = $tip_categories;
  return $response;
}
