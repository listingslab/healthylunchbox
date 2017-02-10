<?php
/**
 * Adds the Special Content information to /app endpoint
 * http://api.healthylunchbox.com.au/wp-admin/post.php?post=649&action=edit
 */

  $special_id = 649;
  $response->data->special = new stdClass();
  $response->data->special->data = get_fields($special_id);
  $response->data->special->editUrl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post='.$special_id.'&action=edit';
