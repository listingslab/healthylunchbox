<?php

// Return all recipies
function hlbapi_recipies( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->description = "List all recipies";
  $total = 0;
  $args = array('numberposts' => -1,'post_type' => 'recipe');
  $recipies = get_posts($args);
  $data = Array ();
  foreach($recipies as $item){
    $total ++;
    $itemObj = new stdClass();
    $itemObj->ID = $item->ID;
    $itemObj->title = $item->post_title;
    $itemObj->fields = get_fields($item->ID);
    $data[] = $itemObj;
  }
  $response->total = $total;
  $response->data = $data;
  return $response;
}

// Return a single recipie from the ID
function hlbapi_recipie( WP_REST_Request $request ) {
  $id = $request['id'];
  $response = new stdClass();
  $response->description = "Recipie id:".$id;
  $recipie = get_post($id);
  $recipie->act = get_fields($id);

  $response->data = $recipie;
  return $response;
}
