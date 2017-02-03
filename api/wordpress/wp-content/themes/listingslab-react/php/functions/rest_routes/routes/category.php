<?php
/**
 * Route to get category by catID
 */

function hlbapi_category( WP_REST_Request $request ) {

  $response = new stdClass();
  $response->status = "get_category";
  $response->message = "Returns category list for specified term_id";
  $response->data = new stdClass();
  $response->data->taxonomy = $request['taxonomy'];
  $response->data->term_id = $request['term_id'];
  $args = array(
      'post_status' => 'publish',
      'posts_per_page' => -1,
      'tax_query' => array(
          array(
              'taxonomy' => $response->data->taxonomy,
              'field' => 'id',
              'terms' => $response->data->term_id
          )
      )
  );
  $query = new WP_Query( $args );
  // $the_query->posts
  $items = array();
  foreach ($query->posts as &$post) {
    $item = new stdClass();
    $acf = get_fields($post);
    $item->ID = $post->ID;
    $item->post_type = $post->post_type;
    $item->post_title = $post->post_title;
    $item->post_name = $post->post_name;
    $item->post_modified = $post->post_modified;
    $item->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post=666&action=edit';
    $item->acf = $acf;
    $items[] = $item;
  }
  $response->data->items = $items;

  return $response;

}
