<?php



if ( ! defined('ABSPATH')) exit;  // if direct access 


	
	
	
	function breadcrumb_custom_css($breadcrumb_themes, $breadcrumb_bg_color)
				{
					
					$html = '';
					
					if($breadcrumb_themes == 'theme1')
						{
						
							$html .= '
							
							
.breadcrumb-container.theme1 li {
	margin: 0;
	padding: 0;
}							
							
.breadcrumb-container.theme1 a {
	background: '.$breadcrumb_bg_color.';
	display: inline-block;
	margin: 0 5px;
	padding: 5px 10px;
	text-decoration: none;
}

';
						
						}
					elseif($breadcrumb_themes == 'theme2')
						{
							$html .= '
/* Theme 2*/

.breadcrumb-container.theme2 li {
	margin: 0;
	padding: 0;
}


.breadcrumb-container.theme2 a {
  background: '.$breadcrumb_bg_color.';
  border-bottom: 1px solid rgb(139, 139, 139);
  border-top: 1px solid rgba(255, 255, 255, 0);
  display: inline-block;
  margin: 0 5px;
  padding: 5px 10px;
  text-decoration: none;
}


';
						
						}
					
					elseif($breadcrumb_themes == 'theme3')
						{
							$html .= '
/* Theme 3*/

.breadcrumb-container.theme3 li {
	margin: 0;
	padding: 0;
}


.breadcrumb-container.theme3 a {
  background: '.$breadcrumb_bg_color.';
  border-top: 1px solid rgb(139, 139, 139);
  border-bottom: 1px solid rgba(355, 355, 355, 0);
  display: inline-block;
  margin: 0 5px;
  padding: 5px 10px;
  text-decoration: none;
}

';
						
						}					
					
					elseif($breadcrumb_themes == 'theme4')
						{
							$html .= '

/* Theme theme4*/

.breadcrumb-container.theme4 li {
  display: inline-block;
  margin: 0 14px;
  padding: 0;
}

.breadcrumb-container.theme4 a {
  background: '.$breadcrumb_bg_color.';
  color: rgb(102, 102, 102);
  display: inline-block;
  font-size: 14px;
  height: 16px;
  margin: 0;
  padding: 5px 10px;
  text-decoration: none;
  position:relative;
}


.breadcrumb-container.theme4 a::after {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) '.$breadcrumb_bg_color.';
  border-image: none;
  border-style: solid;
  border-width: 13px;
  content: " ";
  display: inline-block;
  height: 0;
  line-height: 0;
  position: absolute;
  right: -26px;
  top: 0;
  width: 0;
}

.breadcrumb-container.theme4 .separator {
  display: none;
}

';
						
						}					
					elseif($breadcrumb_themes == 'theme5')
						{
							$html .= '

/* Theme theme5*/

.breadcrumb-container.theme5 li {
  display: inline-block;
  margin: 0 14px;
  padding: 0;
}

.breadcrumb-container.theme5 a {
  background: '.$breadcrumb_bg_color.';
  color: rgb(102, 102, 102);
  display: inline-block;
  font-size: 14px;
  height: 16px;
  margin: 0;
  padding: 5px 10px;
  text-decoration: none;
  position:relative;
}

.breadcrumb-container.theme5 a::before {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  border-color: '.$breadcrumb_bg_color.' '.$breadcrumb_bg_color.' '.$breadcrumb_bg_color.' rgba(0, 0, 0, 0);
  border-image: none;
  border-style: solid;
  border-width: 13px;
  content: " ";
  display: block;
  height: 0;
  left: -18px;
  position: absolute;
  top: 0;
  width: 0;
}
.breadcrumb-container.theme5 a::after {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) '.$breadcrumb_bg_color.';
  border-image: none;
  border-style: solid;
  border-width: 13px;
  content: " ";
  display: inline-block;
  height: 0;
  line-height: 0;
  position: absolute;
  right: -26px;
  top: 0;
  width: 0;
}

.breadcrumb-container.theme5 .separator {
  display: none;
}

';
						
						}					
					
					
				

					
					
					else{
							$html .= '';
						
						}	
				
				
				
				
				
				
				
						
						return $html;
						
				
				
				}
	
	
	
	