<?php
/**
 * Returns the initial content; navigation, home page content, featured content & taxonomies
 */

function hlbapi_app( WP_REST_Request $request ) {
  // Initialise the response
  $response = new stdClass();
  $response->code = "app";
  $response->message = "Initial WordPress content";
  // start data
  $response->data = new stdClass();
  $response->data->status = 418;

  /////////// Navigation
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
  /////////// END Navigation

  ///////// Home page & Hero Edit page ID = 672
  $home_id = 672;
  $response->data->home_page = new stdClass();
  $response->data->home_page->hero = new stdClass();
  $response->data->home_page->hero->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$home_id.'&action=edit';
  $response->data->home_page->hero->data = get_fields($home_id);
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

    $tempObj->image = $image['image']['url'];
    $featured_recipes[] = $tempObj;
  }
  $response->data->home_page->featured_recipes = $featured_recipes;


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
    $tempObj->itemType = $post->post_type;
    $tempObj->itemSlug = $post->post_name;
    $tempObj->itemModified = $post->post_modified;
    $image = get_fields($post->ID);
    $tempObj->image = $image['image']['url'];
    $featured_tips[] = $tempObj;
  }
  $response->data->home_page->featured_tips = $featured_tips;
  ///////// END Home page & Hero Edit page ID = 672



  ///////// Tips Categories & Items (wordpress ID = 561)
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
      /// End Categories & Items
    }
  }
  ///////// End Tips page

  include 'app/recipes.php';

  ///////// About page (wordpress ID = 510)
  $about_id = 510;
  $response->data->about = new stdClass();
  $response->data->about->post = get_post($about_id);
  unset($response->data->about->post->post_password);
  unset($response->data->about->post->post_date_gmt);
  unset($response->data->about->post->post_author);
  unset($response->data->about->post->menu_order);
  unset($response->data->about->post->post_excerpt);
  unset($response->data->about->post->comment_status);
  unset($response->data->about->post->pinged);
  unset($response->data->about->post->ping_status);
  unset($response->data->about->post->to_ping);
  unset($response->data->about->post->post_modified_gmt);
  unset($response->data->about->post->post_content_filtered);
  unset($response->data->about->post->post_mime_type);
  unset($response->data->about->post->comment_count);
  unset($response->data->about->post->filter);
  unset($response->data->about->post->guid);
  $response->data->about->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$about_id.'&action=edit';



  $response->data->tips->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$tip_id.'&action=edit';

  include 'app/lunchbox.php';
  return $response;
}
