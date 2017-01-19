<?php
  $templatePath = get_template_directory_uri();
  $imagePath = get_template_directory_uri() . '/img';
  $apiPath = '/wp-json/hlb-api/';

  // If this is a content item, redirect it to the JSON output
/*
  if (is_home() != 1){
    if (get_the_ID()){
      wp_redirect (home_url() . '?route=' . get_post_type() . '/' . get_the_ID());
    }
  }
*/
  // print_r ('<pre>');
  // print_r ('</pre>');
