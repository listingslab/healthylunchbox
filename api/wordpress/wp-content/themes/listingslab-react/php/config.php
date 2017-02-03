<?php

/**
 * Setup config
 */


  $templatePath = get_template_directory_uri();
  $imagePath = get_template_directory_uri() . '/img';
  $apiPath = '/wp-json/hlb-api/';



    /* If this is a content item, redirect it to the JSON output
        Attempt to transmorgify current path with corresponding beta path

        $config = new stdClass();
        $config->$imagePath = get_template_directory_uri() . '/img';
        $config->$apiPath = 'http://api.healthylunchbox.com.au/wp-json/hb-api/';
        $config->$frontendPath = 'http://beta.healthylunchbox.com.au';

      if (is_home() != 1){
        if (get_the_ID()){
          wp_redirect (home_url() . '?route=' . get_post_type() . '/' . get_the_ID());
        }
      }

      print_r ('<pre>');
      print_r ('</pre>');

    */
