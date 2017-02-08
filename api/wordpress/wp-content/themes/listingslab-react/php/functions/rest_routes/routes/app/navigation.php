<?php
/**
 * Adds the Navigation information to /app endpoint
 * http://api.healthylunchbox.com.au/wp-admin/nav-menus.php
 */

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
