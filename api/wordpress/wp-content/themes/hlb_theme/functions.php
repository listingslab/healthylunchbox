<?php

	// Add support for thumbnails
	add_theme_support( 'recipe-thumbnails' );

	// Register the /wp-json/hlb-api/routes
	include 'php/functions/rest_routes/register_routes.php';

	// Cleans up the post editing interface
	include 'php/functions/cleanup.php';
