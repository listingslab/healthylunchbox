<?php
/**
 * Route to return an item by slug
 */

function hlbapi_item( WP_REST_Request $request ) {
  $slug = $request['slug'];
  $response = new stdClass();
  $response->code = "item";
  $response->message = $slug;
  $response->data = new stdClass();
  $post = get_page_by_path($slug, OBJECT, ['recipe', 'tip']);
  $acf = get_fields($post->ID);
  $response->data->ID = $post->ID;
  $response->data->post_name = $post->post_name;
  $response->data->post_type = $post->post_type;
  $response->data->post_title = $post->post_title;
  $response->data->title = $post->post_title;
  $response->data->subTitle = $acf['short_description'];
  // $response->data->$acf = $post->ID;

  $response->data->post = $post;
  $response->data->acf = get_fields($post->ID);
  return $response;
}
