<?php

/**
 * Route to get categories
 */


function hlbapi_categories( WP_REST_Request $request ) {

  $response = new stdClass();
  $response->status = "get_categories";
  $response->message = "Returns categories & title for specified taxonomy";

  $response->data = new stdClass();
  $response->data->code = 418;
  $taxonomy = $request['taxonomy'];

  if (isset ($taxonomy) ) {
    $response->data->taxonomy = $taxonomy;
    $categories = get_terms( array(
      'taxonomy' => $taxonomy,
      'hide_empty' => false,
    ));
    if (!isset($categories->errors)) {

    } else {
      $response->data->taxonomy = $taxonomy;
      $response->data->error = 'Taxonomy not found';
      $response->data->code = 404;
    }
  } else {
    $response->data->error = 'Taxonomy must be specified in URL eg: /categories/catname';
    $response->data->code = 204;
  }
  return $response;

  /*
  if (isset ($_REQUEST['taxonomy'])){
    $response->data->taxonomy = $_REQUEST['taxonomy'];
    if (!isset($categories->errors)) {
      $response->data->categories = array ();
      for ($i = 0; $i < count($categories); $i++){
        $category = new stdClass();
        $category->catID = $categories[$i]->term_id;
        $category->title = $categories[$i]->name;
        $category->subTitle = $categories[$i]->description;
        $category->slug = $categories[$i]->slug;
        $category->taxonomy = $categories[$i]->taxonomy;
        $category->itemType = $response->data->taxonomy;
        $category->linkUrl = '/category?catID=' . $categories[$i]->term_id;
        $category->linkText = 'View category';
        $category->linkType = 'to';
        $category->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/term.php?taxonomy=' . $category->taxonomy . '&tag_ID=' . $category->catID;
        $response->data->categories[] = $category;
      }
    }
  }else{
    $response->data->taxonomy = 'Taxonomy not found';
  }
  */




////////////////////////////////////////
/*
  $categoryArr = array ();
  for ($i = 0; $i < count($categories); $i++){
    $cat = new stdClass();
    $cat->term_id = $categories[$i]->term_id;
    $cat->taxonomy = $categories[$i]->taxonomy;
    $cat->name = $categories[$i]->name;
    $cat->slug = $categories[$i]->slug;
    $cat->description= $categories[$i]->description;
    $cat->edit_url = 'http://api.healthylunchbox.com.au/wp-admin/term.php?taxonomy=recipes&tag_ID='.$cat->term_id;
    $items = get_posts(array(
    'post_type' => 'recipe',
    'numberposts' => -1,
    'tax_query' => array(array(
        'taxonomy' => $cat->taxonomy,
        'field' => 'slug',
        'terms' => array($cat->slug),
        'operator' => 'IN'
      ))
    ));
    $cat->items = array ();
    if (count ($items) != 0){
      for ($j = 0; $j < count($items); $j++){
        $item = new stdClass();
        $item->ID = $items[$j]->ID;
        $item->post_title = $items[$j]->post_title;
        $item->slug = $items[$j]->post_name;
        $item->post_type = $items[$j]->post_type;
        $item->post_modified = $items[$j]->post_modified;
        $act = get_fields($item->ID);
        $item->is_featured = $act['is_featured'];
        $item->short_description = $act['short_description'];
        $item->image_thumbnail = $act['image']['sizes']['thumbnail'];
        $item->image_large = $act['image']['sizes']['large'];
        $item->image_large_w = $act['image']['sizes']['large-width'];
        $item->image_large_h = $act['image']['sizes']['large-height'];
        $item->ingredients = $act['ingredients'];
        $item->method = $act['method'];
        $item->serves = $act['serves'];
        $item->preparation_time = $act['preparation_time'];
        $item->cooking_time = $act['cooking_time'];
        //
        //$item->act = $act;
        $cat->items[] = $item;
      }
      $categoryArr[] = $cat;
    }

  }
  // $response->data->recipes = $categoryArr;
////////////////////////////////////////
  */

}
