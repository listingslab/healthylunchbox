<?php

// Register Content Types
add_action('init', 'register_content_types');

function register_content_types() {

    /*

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
        'menu_name'         => 'Recipes OLD',
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

    register_post_type('recipe_old', $recipe_args);*/

}
