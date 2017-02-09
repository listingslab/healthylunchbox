<?php
/**
 * Adds the Special Content information to /app endpoint
 * http://api.healthylunchbox.com.au/wp-admin/post.php?post=649&action=edit
 */

  $special_id = 649;
  $response->data->special = new stdClass();
  $response->data->special->post = get_post($about_id);
  $response->data->special->acf = get_fields($about_id);
  $response->data->special->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$special_id.'&action=edit';
