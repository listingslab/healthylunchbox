<?php
/**
 * Show Recipes
 */

function hlbapi_recipes( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->description = "List all recipies";
  $response->status = "ok";
  $total = 0;
  $args = array('numberposts' => -1,'post_type' => 'recipe');
  $recipies = get_posts($args);
  $data = Array ();
  foreach($recipies as $item){
    $total ++;
    $act_fields = get_fields($item->ID);
    $itemObj = new stdClass();
    $itemObj->ID = $item->ID;
    $itemObj->title = $item->post_title;
    $itemObj->short_description = $act_fields['short_description'];
    $itemObj->imageID = $act_fields['image']['id'];
    $itemObj->thumbnail = $act_fields['image']['sizes']['thumbnail'];
    // $itemObj->tags = [];
    $itemObj->categories = [];
    $categories = wp_get_object_terms( $item->ID,  'recipe_categories' );
    // $tags = wp_get_post_tags( $item->ID );
    foreach($categories as $category){
      $categoryObj = new stdClass();
      $categoryObj->ID = $category->term_id;
      $categoryObj->name = $category->name;
      $itemObj->categories[] = $categoryObj;
    }
    $data[] = $itemObj;
  }
  $response->total = $total;
  $response->data = $data;
  return $response;
}
