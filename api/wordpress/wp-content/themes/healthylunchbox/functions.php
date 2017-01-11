<?php 

// Register Custom Post Types
add_action('init', 'register_custom_posts_init');

function register_custom_posts_init() {
    	
    // Register Fish
    $fish_labels = array(
        'name'               => 'Fish',
        'singular_name'      => 'Fish',
        'menu_name'          => 'Fish'
    );
    $fish_args = array(
        'labels'             => $fish_labels,
        'public'             => true,
        'capability_type'    => 'post',
        'has_archive'        => true,
        'show_in_rest'       => true,
        'supports'           => array( 'title', 'thumbnail' )
    );
    register_post_type('fish', $fish_args);

}