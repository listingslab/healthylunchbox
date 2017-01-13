<?php
  $templatePath = get_template_directory_uri();
  $imagePath = get_template_directory_uri() . '/img';

  // If this is a content item, redirect it to the JSON output
  // print_r ('<pre>');
  if (is_home() != 1){
    if (get_the_ID()){
      wp_redirect (home_url() . '/wp-json/wp/v2/' . get_post_type() . 's/' . get_the_ID());
    }
  }
  // print_r ('</pre>');
?>
