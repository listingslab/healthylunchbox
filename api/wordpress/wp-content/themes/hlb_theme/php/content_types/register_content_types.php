<?php

// http://www.wpbeginner.com/wp-tutorials/how-to-add-categories-to-a-custom-post-type-in-wordpress/

// Register Content Types
add_action('init', 'register_content_types');

function register_content_types() {

    $capabilities = array(
      'publish_posts' => 'publish_content',
      'edit_posts' => 'edit_content',
      'edit_others_posts' => 'edit_others_content',
      'delete_posts' => 'delete_content',
      'delete_others_posts' => 'delete_others_content',
      'read_private_posts' => 'read_private_content',
      'edit_post' => 'edit_content',
      'delete_post' => 'delete_content',
      'read_post' => 'read_content'
    );

    $recipe_labels = array(
        'name'              => 'Recipie',
        'singular_name'     => 'Recipe',
        'menu_name'         => 'Recipes',
        'add_new'           => 'Add Recipe',
        'edit'              => 'Edit Recipe',
    );

    $recipe_args = array(
        'label'              => 'Recipes',
        'labels'             => $recipe_labels,
        'show_in_menu'       => true,
        'public'             => true,
        'has_archive'        => true,
        'show_in_rest'       => true,
        'supports'           => array( 'title', 'thumbnail' ),
        'taxonomies'		      => array('post_tag', 'category' )
    );

    register_post_type('recipe', $recipe_args);

    flush_rewrite_rules(false);

    add_role('content_manager', 'Content Manager', array (
      'publish_content' => true,
      'edit_content' => true,
      'edit_others_content' => true,
      'delete_content' => true,
      'delete_others_content' => true,
      'read_private_content' => true,
      'edit_content' => true,
      'delete_content' => true,
      'read_content' => true,
      'read' => true,
   )
 );
}

if( !current_user_can('activate_plugins') ) {
  function mytheme_admin_bar_render() {
      global $wp_admin_bar;
      $wp_admin_bar->remove_menu('edit-profile', 'user-actions');
  }
  add_action( 'wp_before_admin_bar_render', 'mytheme_admin_bar_render' );
  function stop_access_profile() {
      remove_menu_page( 'index.php' ); //dashboard
      remove_menu_page( 'profile.php' );
      remove_submenu_page( 'users.php', 'profile.php' );
  }
  add_action( 'admin_init', 'stop_access_profile' );
}
