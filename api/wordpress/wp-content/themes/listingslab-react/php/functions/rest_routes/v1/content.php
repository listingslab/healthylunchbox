<?php
/**
 * Route to get ALL the content
 */

function hlbapi_content( WP_REST_Request $request ) {

  $response = new stdClass();
  $response->code = "get_content";
  $response->message = "get ALL the content";

  $response->data = new stdClass();
  $response->data->status = 418;

  // first get all the categories
  // taxonomies we want are recipes & tips
////////////////////////////////////////
  $categories = get_terms( array(
    'taxonomy' => 'recipes',
    'hide_empty' => false,
  ));
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
  $response->data->recipes = $categoryArr;
////////////////////////////////////////
  return $response;
}
