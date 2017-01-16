<?php

	// Hides the permalink field on post entry pages
	function hide_permalink() {
    return '';
	}
	add_filter( 'get_sample_permalink_html', 'hide_permalink' );


	// remove the default categories box
	function remove_default_categories_box() {
			remove_meta_box('categorydiv', '', 'side');
	}
	add_action( 'admin_head', 'remove_default_categories_box' );
