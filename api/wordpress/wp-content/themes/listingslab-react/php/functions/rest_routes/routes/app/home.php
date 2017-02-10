<?php
/**
 * Add the Home page information: hero & featured recipes & tips to /app endpoint
 * http://api.healthylunchbox.com.au/wp-admin/post.php?post=672&action=edit
 */

  $home_id = 672;
  $response->data->home_page = new stdClass();
  $response->data->home_page->hero = new stdClass();
  $response->data->home_page->hero->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$home_id.'&action=edit';
  $response->data->home_page->hero->data = get_fields($home_id);

  // featured recipes
  $featured_recipes = array ();
  $args = array(
   'posts_per_page'	=> 3,
   'post_type'		=> ['recipe'],
   'orderby'     => 'modified',
   'meta_key'		=> 'is_featured',
   'meta_value'	=> 'yes'
  );
  $query = query_posts( $args );
  foreach ($query as $post){
   $tempObj = new stdClass();
   $tempObj->ID = $post->ID;
   $tempObj->editLink = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$tempObj->ID.'&action=edit';
   $tempObj->title = $post->post_title;
   $act = get_fields($tempObj->ID);
   $tempObj->subTitle = '';
   if (isset($act['short_description'])){
     $tempObj->subTitle = htmlspecialchars_decode($act['short_description']);
   }
   $tempObj->itemType = $post->post_type;
   $tempObj->itemSlug = $post->post_name;
   $tempObj->itemModified = $post->post_modified;
   $image = get_fields($post->ID);
   $tempObj->image = $image['image']['url'];
   $tempObj->freezable = false;
   if (isset($act['freezable'])){
     $tempObj->freezable = $act['freezable'];
   }

   $tempObj->preparation_time = '';
   if (isset($act['preparation_time'])){
     $tempObj->preparation_time = $act['preparation_time'];
   }
   $tempObj->veg_serves = '';
   if (isset($act['veg_serves'])){
     $tempObj->veg_serves = $act['veg_serves'];
   }
   $tempObj->cooking_time = '';
   if (isset($act['cooking_time'])){
     $tempObj->cooking_time = $act['cooking_time'];
   }

   $tempObj->image = $image['image']['url'];
   $featured_recipes[] = $tempObj;
  }
  $response->data->home_page->featured_recipes = $featured_recipes;

  // featured recipes
  $featured_tips = array ();
  $args = array(
   'posts_per_page'	=> 3,
   'post_type'		=> ['tip'],
   'orderby'     => 'modified',
   'meta_key'		=> 'is_featured',
   'meta_value'	=> 'yes'
  );
  $query = query_posts( $args );
  foreach ($query as $post){
   $tempObj = new stdClass();
   $tempObj->ID = $post->ID;
   $tempObj->editLink = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$tempObj->ID.'&action=edit';
   $tempObj->title = $post->post_title;
   $act = get_fields($tempObj->ID);
   $tempObj->subTitle = '';
   if (isset($act['short_description'])){
     $tempObj->subTitle = htmlspecialchars_decode($act['short_description']);
   }
   $tempObj->home_tip_text = '';
   if (isset($act['home_tip_text'])){
     $tempObj->home_tip_text = htmlspecialchars_decode($act['home_tip_text']);
   }
   $tempObj->itemType = $post->post_type;
   $tempObj->itemSlug = $post->post_name;
   $tempObj->itemModified = $post->post_modified;
   $image = get_fields($post->ID);
   $tempObj->image = $image['image']['url'];
   $featured_tips[] = $tempObj;
  }
  $response->data->home_page->featured_tips = $featured_tips;
