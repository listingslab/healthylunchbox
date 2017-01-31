<?php
/**
 * Returns the initial content; navigation, home page content, featured content & taxonomies
 */

function hlbapi_init( WP_REST_Request $request ) {
  // Initialise the response
  $response = new stdClass();
  $response->code = "init";
  $response->message = "Initial content";
  // start data
  $response->data = new stdClass();
  $response->data->status = 418;
  // navigation
  $str = file_get_contents('http://api.healthylunchbox.com.au/wp-json/wp-api-menus/v2/menus/37');
  $json = json_decode($str, true);
  $navArr = array ();
  for ($i = 0; $i < count($json['items']); $i ++) {
    $navItem = new stdClass();
    $navItem->id = $json['items'][$i]['id'];
    $navItem->order = $json['items'][$i]['order'];
    $navItem->title = htmlspecialchars_decode($json['items'][$i]['title']);
    $navItem->url = htmlspecialchars_decode($json['items'][$i]['url']);
    $navArr[] = $navItem;
  }
  $response->data->navigation = $navArr;

  ///////// Home page & Hero Edit page ID = 508
  $id = 672;
  $response->data->home_page = new stdClass();
  $response->data->home_page->hero = new stdClass();
  $response->data->home_page->hero->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$id.'&action=edit';
  $response->data->home_page->hero->data = get_fields($id);

  //////// featured_recipes
  $featured_recipes = array ();
  $args = array(
  	'posts_per_page'	=> 2,
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
      $tempObj->subTitle = $act['short_description'];
    }
    $tempObj->itemType = $post->post_type;
    $tempObj->itemSlug = $post->post_name;
    $tempObj->itemModified = $post->post_modified;
    $featured_recipes[] = $tempObj;
  }
  $response->data->home_page->featured_recipes = $featured_recipes;

  //////// featured_tips
  $featured_tips = array ();
  $args = array(
  	'posts_per_page'	=> 2,
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
      $tempObj->subTitle = $act['short_description'];
    }
    $tempObj->itemType = $post->post_type;
    $tempObj->itemSlug = $post->post_name;
    $tempObj->itemModified = $post->post_modified;
    $featured_tips[] = $tempObj;
  }
  $response->data->home_page->featured_tips = $featured_tips;

  /////////// Recipe categories

  

  return $response;
}
