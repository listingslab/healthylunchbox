<?php

/*
* @Author 		pickplugins
* Copyright: 	2015 pickplugins
*/

if ( ! defined('ABSPATH')) exit;  // if direct access


class class_breadcrumb_shortcodes  {
	
	
    public function __construct(){

		add_shortcode( 'breadcrumb', array( $this, 'breadcrumb_display' ) );

    }
	

	
	
	public function breadcrumb_display($atts, $content = null ) {
			$atts = shortcode_atts(
				array(
					'themes' => '',
	
					), $atts);
	
				$html = '';
				
				$themes = $atts['themes'];
	
	
				$breadcrumb_hide_on_pages = get_option( 'breadcrumb_hide_on_pages' );
				$breadcrumb_hide_on_page_by_id = get_option( 'breadcrumb_hide_on_page_by_id' );			
				
				$hide_page_ids = explode(',', $breadcrumb_hide_on_page_by_id);
				
				$current_page_id = get_the_ID();
				
				$html = '';
				
				$breadcrumb = new breadcrumb();
				$html.= $breadcrumb->breadcrumb_html($themes);
				
				if(is_home() && !empty($breadcrumb_hide_on_pages['home'])){
					return '';
					}
				if(is_front_page() && !empty($breadcrumb_hide_on_pages['front_page'])){
					return '';
					}	
					
				if(is_front_page() && is_home() && !empty($breadcrumb_hide_on_pages['blog_front_page'])){
					return '';
					}						
				else{
					
					
					if(in_array($current_page_id,$hide_page_ids)){
							
						return '';
						
						}
					else{
						return $html;
						
						}
	
				}

	}
	


}


new class_breadcrumb_shortcodes();