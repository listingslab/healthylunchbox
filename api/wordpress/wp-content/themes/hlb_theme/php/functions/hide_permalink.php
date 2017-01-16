<?php
	// Hides the permalink field on post entry pages

	function hide_permalink() {
    return '';
	}
	add_filter( 'get_sample_permalink_html', 'hide_permalink' );
