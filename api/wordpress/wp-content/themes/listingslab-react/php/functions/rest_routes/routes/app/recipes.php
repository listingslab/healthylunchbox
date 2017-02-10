<?php
/**
  * Adds recipes to /app endpoint : recipe categories with items
*/

  $recipe_id = 553;
  $response->data->recipes = new stdClass();
  $response->data->recipes->post = get_post($recipe_id);
  $response->data->recipes->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$recipe_id.'&action=edit';
  unset($response->data->recipes->post->post_password);
  unset($response->data->recipes->post->post_date_gmt);
  unset($response->data->recipes->post->post_author);
  unset($response->data->recipes->post->menu_order);
  unset($response->data->recipes->post->post_excerpt);
  unset($response->data->recipes->post->comment_status);
  unset($response->data->recipes->post->pinged);
  unset($response->data->recipes->post->ping_status);
  unset($response->data->recipes->post->to_ping);
  unset($response->data->recipes->post->post_modified_gmt);
  unset($response->data->recipes->post->post_content_filtered);
  unset($response->data->recipes->post->post_mime_type);
  unset($response->data->recipes->post->comment_count);
  unset($response->data->recipes->post->guid);
  unset($response->data->recipes->post->filter);
  $taxonomy = 'recipes';
  $categories = get_terms( array(
  'taxonomy' => $taxonomy,
  'hide_empty' => false,
  ));
  if (!isset($categories->errors)) {
  $response->data->recipes->categories = array();
  for ($i = 0; $i < count($categories); $i++){
    $category = new stdClass();
    $category->term_id = $categories[$i]->term_id;
    $category->title = htmlspecialchars_decode($categories[$i]->name);
    $category->subTitle = htmlspecialchars_decode($categories[$i]->description);
    if (function_exists('z_taxonomy_image_url')) {
      $category->image = z_taxonomy_image_url($category->term_id);
    }
    $category->slug = $categories[$i]->slug;
    $category->taxonomy = $categories[$i]->taxonomy;
    $category->route = '/' . $category->taxonomy . '/' . $category->slug;
    $category->linkText = $category->title;
    $category->linkType = 'to';
    $category->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/term.php?taxonomy=';
    $category->editUrl = $category->editUrl . $category->taxonomy;
    $category->editUrl = $category->editUrl . '&tag_ID=' . $category->term_id;
    $args = array(
      'post_status' => 'publish',
      'posts_per_page' => -1,
      'tax_query' => array(
        array(
          'taxonomy' => $taxonomy,
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
      $item->post_type = $post->post_type;
      $item->post_title = $post->post_title;
      $item->post_name = $post->post_name;
      $item->post_modified = $post->post_modified;
      $item->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post=' . $item->ID . '&action=edit';
      $acf = get_fields($post);
      $item->acf = $acf;
      $items[] = $item;
    }
    $category->items = $items;
    $response->data->recipes->categories[] = $category;
    }
  }
