<?php
/**
  * Adds tips to /app endpoint : tip categories with items
*/

  $tip_id = 561;
  $response->data->tips = new stdClass();
  $response->data->tips->post = get_post($tip_id);
  $response->data->tips->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$tip_id.'&action=edit';
  unset($response->data->tips->post->post_password);
  unset($response->data->tips->post->post_date_gmt);
  unset($response->data->tips->post->post_author);
  unset($response->data->tips->post->menu_order);
  unset($response->data->tips->post->post_excerpt);
  unset($response->data->tips->post->comment_status);
  unset($response->data->tips->post->pinged);
  unset($response->data->tips->post->ping_status);
  unset($response->data->tips->post->to_ping);
  unset($response->data->tips->post->post_modified_gmt);
  unset($response->data->tips->post->post_content_filtered);
  unset($response->data->tips->post->post_mime_type);
  unset($response->data->tips->post->comment_count);
  unset($response->data->tips->post->guid);
  unset($response->data->tips->post->filter);
  $taxonomy = 'tips';
  $categories = get_terms( array(
   'taxonomy' => $taxonomy,
   'hide_empty' => false,
  ));
  if (!isset($categories->errors)) {
   $response->data->tips->categories = array();
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
     $category->route = "/tip/" . $category->slug;
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
       $acf = get_fields($post->ID);
       $item->image = $acf['image'];
       $item->post_title = $post->post_title;
       $item->post_name = $post->post_name;
       $item->post_modified = $post->post_modified;
       $item->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post=' . $item->ID . '&action=edit';
       $acf = get_fields($post);
       $item->acf = $acf;
       $items[] = $item;
     }
     $category->items = $items;
     $response->data->tips->categories[] = $category;
   }
  }
  $response->data->tips->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$tip_id.'&action=edit';
