<?php

// Register Custom Post Types
add_action('init', 'register_custom_posts_init');

function register_custom_posts_init() {

    // Register Fish
    $recipe_labels = array(
        'name'               => 'Recipie',
        'singular_name'      => 'Recipe',
        'menu_name'          => 'Recipes'
    );
    $recipe_args = array(
        'labels'             => $recipe_labels,
        'public'             => true,
        'capability_type'    => 'post',
        'has_archive'        => true,
        'show_in_rest'       => true,
        'supports'           => array( 'title', 'thumbnail' )
    );
    register_post_type('recipe', $recipe_args);

}


function add_capabilities() { 
 $role = get_role('subscriber');
 $role->add_cap( 'read' );
}
