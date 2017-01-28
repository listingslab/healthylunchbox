<?php
/**
 * Route to return the home page content
 */

function hlbapi_home( WP_REST_Request $request ) {
  $response = new stdClass();
  $response->code = "home";
  $response->message = "Home page content";
  $response->data = new stdClass();
  $response->data->code = 418;
  // Home page ID = 508
  $id = 508;
  $response->data->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$id.'&action=edit';
  $home_page = new stdClass();
  $page = get_post($id);
  $hero = get_fields($id);
  $featured = new stdClass();
  $featured->number = $hero['number_featured_items'];
  unset($hero['number_featured_items']);
  $response->data->hero = $hero;
  $featured->items = array ();
  $args = array(
  	'numberposts'	=> -1,
  	'post_type'		=> ['recipe', 'tip'],
    'orderby'     => 'modified',
  	'meta_key'		=> 'is_featured',
  	'meta_value'	=> 'yes'
  );
  $all_featured = query_posts( $args );
  $i = 0;
  foreach ($all_featured as $post){
    $tempObj = new stdClass();
    $tempObj->ID = $post->ID;
    $tempObj->editLink = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$tempObj->ID.'&action=edit';
    $tempObj->title = $post->post_title;
    $act = get_fields($tempObj->ID);
    $tempObj->subTitle = '';
    if (isset($act['short_description'])){
      $tempObj->subTitle = $act['short_description'];
    }
    $tempObj->itemType = $post->post_type;
    $tempObj->itemSlug = $post->post_name;
    $tempObj->itemModified = $post->post_modified;
    $i++;
    if ($i <= $featured->number){
      $featured->items[] = $tempObj;
    }else{
      break;
    }
  }
  $response->data->featured = $featured;
  return $response;
}

/*
*/
