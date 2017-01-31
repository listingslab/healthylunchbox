<?php
/**
 * Lunchbox items by category /lunchbox
 */

function hlbapi_lunchbox( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->code = "lunchbox";
  $response->message = "Lunchbox items by category";
  $response->data = new stdClass();
  $response->data->status = 418;
  $response->data->taxonomyUrl = 'http://api.healthylunchbox.com.au/wp-admin/edit-tags.php?taxonomy=lunchbox';
  // get categories for lunchbox items taxonomy
  $categories = get_terms( array(
    'taxonomy' => 'lunchbox',
    'hide_empty' => false,
  ));
  $categoryArr = array();
  for ($i = 0; $i < count($categories); $i++){
    // loop through the categories and get the items for each
    $category = new stdClass();
    $category->term_id = $categories[$i]->term_id;
    $category->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/term.php?taxonomy=lunchbox&tag_ID=' . $category->term_id;
    $category->title = htmlspecialchars_decode($categories[$i]->name);
    $category->subTitle = htmlspecialchars_decode($categories[$i]->description);
    $category->itemType = 'lunchbox_item';

    $args = array(
      'post_status' => 'publish',
      'posts_per_page' => -1,
      'tax_query' => array(
        array(
            'taxonomy' => 'lunchbox',
            'field' => 'id',
            'terms' => $category->term_id
        )
      )
    );
    $query = new WP_Query( $args );
    $items = array();
    foreach ($query->posts as &$post) {
      $item = new stdClass();
      $item->ID = $post->ID;
      $acf = get_fields($item->ID);
      $item->further_information = $acf['further_information'];
      $item->further_image = $acf['image']['sizes'];
      $item->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post=' . $item->ID . '&action=edit';
      $item->title = $post->post_title;

      // $item->further_information = $acf->further_information;
      $item->slug = $post->post_name;
      $item->post_modified = $post->post_modified;
      $item->post_type = $post->post_type;
      $item->acf = get_fields($item->ID);
      $items[] = $item;
    }
    $category->items = $items;
    $categoryArr[] = $category;
  }
  $response->data->categories = $categoryArr;
  return $response;
}
