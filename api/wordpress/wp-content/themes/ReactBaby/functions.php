<?php

function healthy_scripts() {
	wp_register_script( 'healthy-script', get_template_directory_uri() . '/bundle.js', array(), '20160926', true );
	wp_enqueue_script('healthy-script');
}

add_action( 'wp_enqueue_scripts', 'healthy_scripts' );
