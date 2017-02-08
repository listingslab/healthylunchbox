<?php
/**
 * Adds the About information to /app endpoint
 * http://api.healthylunchbox.com.au/wp-admin/post.php?post=510&action=edit
 */

  $about_id = 510;
  $response->data->about = new stdClass();
  $response->data->about->post = get_post($about_id);
  $response->data->about->acf = get_fields($about_id);
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
