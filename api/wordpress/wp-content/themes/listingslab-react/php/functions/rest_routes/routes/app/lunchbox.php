<?php
/**
 * Add the Lunchbox information: to /app endpoint
 * http://api.healthylunchbox.com.au/wp-admin/edit.php?post_type=lunchbox_item
 */

  $lunchbox = new stdClass();
  // Get lunchbox categories and the items in them
  $cats = get_terms( array(
    'taxonomy' => 'lunchbox',
    'hide_empty' => false,
  ));
  if (!isset($cats->errors)) {
    $catArr = array ();
    for ($i = 0; $i < count($cats); $i++){
      $cat = new stdClass();
      // $cat->catID = $cats[$i]->term_id;
      $cat->category = $cats[$i];
      $cat->info = get_fields($cats[$i]->description);

      $cat->editUrl = "http://api.healthylunchbox.com.au/wp-admin/post.php?post=".$cats[$i]->description."&action=edit";
      $cat->items = array();
      $posts = get_posts(array(
      'post_type' => 'lunchbox_item',
      'numberposts' => -1,
      'tax_query' => array(array(
          'taxonomy' => 'lunchbox',
          'field' => 'slug',
          'terms' => array($cat->category->slug),
          'operator' => 'IN'
        ))
      ));
      for ($j = 0; $j < count($posts); $j++) {
        $post = new stdClass();
        $post->ID = $posts[$j]->ID;
        $post->acf = get_fields($post->ID);
        $post->post = get_post($post->ID);
        $cat->items[] = $post;
      }
      $catArr[] = $cat;
    }
  }
  $lunchbox->foodgroups = $catArr;

  $content = new stdClass();
  $content->editURL = "http://api.healthylunchbox.com.au/wp-admin/post.php?post=1083&action=edit";
  $content->data = get_fields(1083);

  $lunchbox->content = $content;

  $response->data->lunchbox = $lunchbox;
