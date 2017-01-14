<?php
/**
 * Return a single recipie from the ID
 */
function hlbapi_recipe( WP_REST_Request $request ) {
  $id = $request['id'];
  $response = new stdClass();
  $response->description = "Get recipe id:".$id;
  $recipie = get_post($id);
  if (!$recipie){
    $response->status = "not found";
    return $response;
  }else{
    // $recipie->act = get_fields($id);
    // $response->data = $recipie;
    return $response;
  }
}
