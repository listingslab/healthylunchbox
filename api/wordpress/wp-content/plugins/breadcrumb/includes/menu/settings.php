<?php	


if ( ! defined('ABSPATH')) exit; // if direct access 



	if(empty($_POST['breadcrumb_hidden']))
		{
	
			$breadcrumb_text = get_option( 'breadcrumb_text' );
			$breadcrumb_separator = get_option( 'breadcrumb_separator' );
			$breadcrumb_font_size = get_option( 'breadcrumb_font_size' );
			$breadcrumb_link_color = get_option( 'breadcrumb_link_color' );						
			$breadcrumb_separator_color = get_option( 'breadcrumb_separator_color' );
			$breadcrumb_bg_color = get_option( 'breadcrumb_bg_color' );							
			$breadcrumb_themes = get_option( 'breadcrumb_themes' );
			$breadcrumb_word_char = get_option( 'breadcrumb_word_char' );				
			$breadcrumb_word_char_count = get_option( 'breadcrumb_word_char_count' );			
			$breadcrumb_word_char_end = get_option( 'breadcrumb_word_char_end' );					
			
			$breadcrumb_display_home = get_option( 'breadcrumb_display_home' );
			
					
							
			
		}
	else
		{	
			if($_POST['breadcrumb_hidden'] == 'Y') {
				//Form data sent
				
				$breadcrumb_text = sanitize_text_field($_POST['breadcrumb_text']);
				update_option('breadcrumb_text', $breadcrumb_text);		

				$breadcrumb_separator = sanitize_text_field($_POST['breadcrumb_separator']);
				update_option('breadcrumb_separator', $breadcrumb_separator);
				
				
				$breadcrumb_word_char = sanitize_text_field($_POST['breadcrumb_word_char']);
				update_option('breadcrumb_word_char', $breadcrumb_word_char);				
				
				$breadcrumb_word_char_count = sanitize_text_field($_POST['breadcrumb_word_char_count']);
				update_option('breadcrumb_word_char_count', $breadcrumb_word_char_count);
				
				$breadcrumb_word_char_end = sanitize_text_field($_POST['breadcrumb_word_char_end']);
				update_option('breadcrumb_word_char_end', $breadcrumb_word_char_end);							
				
				
				$breadcrumb_font_size = sanitize_text_field($_POST['breadcrumb_font_size']);
				update_option('breadcrumb_font_size', $breadcrumb_font_size);				
				
				$breadcrumb_link_color = sanitize_text_field($_POST['breadcrumb_link_color']);
				update_option('breadcrumb_link_color', $breadcrumb_link_color);				
				
				$breadcrumb_separator_color = sanitize_text_field($_POST['breadcrumb_separator_color']);
				update_option('breadcrumb_separator_color', $breadcrumb_separator_color);	
								
				$breadcrumb_bg_color = sanitize_text_field($_POST['breadcrumb_bg_color']);
				update_option('breadcrumb_bg_color', $breadcrumb_bg_color);								
								
				$breadcrumb_themes = sanitize_text_field($_POST['breadcrumb_themes']);
				update_option('breadcrumb_themes', $breadcrumb_themes);				
							
				$breadcrumb_display_home = sanitize_text_field($_POST['breadcrumb_display_home']);
				update_option('breadcrumb_display_home', $breadcrumb_display_home);			

		
				?>
				<div class="updated"><p><strong><?php _e('Changes Saved.' ); ?></strong></p></div>
		
				<?php
				} 
		}
?>





<div class="wrap">

	<div id="icon-tools" class="icon32"><br></div><?php echo "<h2>".__(breadcrumb_plugin_name.' Settings')."</h2>";?>
		<form  method="post" action="<?php echo str_replace( '%7E', '~', $_SERVER['REQUEST_URI']); ?>">
	<input type="hidden" name="breadcrumb_hidden" value="Y">
        <?php settings_fields( 'breadcrumb_plugin_options' );
				do_settings_sections( 'breadcrumb_plugin_options' );
			
		?>

    <div class="para-settings up-paratheme-settings">
    
        <ul class="tab-nav">
            <li nav="1" class="nav1 active"><?php echo _e('Options','breadcrumb'); ?></li>
            <li nav="2" class="nav2"><?php echo _e('Style','breadcrumb'); ?></li>           
            <li nav="3" class="nav3"><?php echo _e('Short-Codes','breadcrumb'); ?></li>
            <li nav="4" class="nav4"><?php echo _e('Help & Upgrade','breadcrumb'); ?></li>
        </ul> <!-- tab-nav end -->   
    
		<ul class="box">
            <li style="display: block;" class="box1 tab-box active">
            
				<div class="option-box">
                    <p class="option-title"><?php echo _e('Breadcrumb front Text','breadcrumb'); ?></p>
                    <p class="option-info"><?php echo _e('Keep empty to hide.','breadcrumb'); ?></p>
                    <input type="text" name="breadcrumb_text" placeholder="You are here:" value="<?php if(!empty($breadcrumb_text)) echo $breadcrumb_text; ?>" />
                </div>
                
                 
				 
                
				<div class="option-box">
                    <p class="option-title"><?php echo _e('Breadcrumb Separator.','breadcrumb'); ?></p>
                    <p class="option-info"><?php echo _e('Link Separator, ex: &raquo;','breadcrumb'); ?></p>
                    <input type="text" placeholder="»" name="breadcrumb_separator" value="<?php if(!empty($breadcrumb_separator)) echo $breadcrumb_separator; ?>" />
                </div>                 

				<div class="option-box">
                    <p class="option-title"><?php echo _e('Breadcrumb font size.','breadcrumb'); ?></p>
                    <p class="option-info"><?php echo _e('ex: 14px','breadcrumb'); ?></p>
                    <input type="text" placeholder="14px" name="breadcrumb_font_size" value="<?php if(!empty($breadcrumb_font_size)) echo $breadcrumb_font_size; ?>" />
                </div>  


				<div class="option-box">
                    <p class="option-title"><?php echo _e('Breadcrumb Title max word/Character count','breadcrumb'); ?></p>
                    <p class="option-info"></p>
                    
                    
                    <select name="breadcrumb_word_char">
                    	<option value="word" <?php if($breadcrumb_word_char == 'word') echo 'selected'; ?> ><?php echo _e('Word','breadcrumb'); ?></option>
                    	<option value="character" <?php if($breadcrumb_word_char == 'character') echo 'selected'; ?> ><?php echo _e('Character','breadcrumb'); ?></option>                        
                        
                        
                    </select>
                    
                    
                    <input placeholder="4" class="breadcrumb_word_char_count" type="text" name="breadcrumb_word_char_count" value="<?php if(!empty($breadcrumb_word_char_count)) echo $breadcrumb_word_char_count; ?>" />
                    <p class="option-info"><?php echo _e('Ending Character','breadcrumb'); ?></p>
                    <input placeholder="..." class="breadcrumb_word_char_end" type="text" name="breadcrumb_word_char_end" value="<?php if(!empty($breadcrumb_word_char_end)) echo $breadcrumb_word_char_end; ?>" />                    
                    
                </div> 




				<div class="option-box">
                    <p class="option-title"><?php echo _e('Display/hide "Home" on breadcrumb','breadcrumb'); ?></p>
                    <p class="option-info"></p>
                    
                    
                    <select name="breadcrumb_display_home">
                    	<option value="yes" <?php if($breadcrumb_display_home == 'yes') echo 'selected'; ?> >Yes</option>
                    	<option value="no" <?php if($breadcrumb_display_home == 'no') echo 'selected'; ?> >No</option>                        
                        
                        
                    </select>
                    
                    
                </div>
                
       
                    
            
            </li>
            
            <li style="display: none;" class="box2 tab-box"> 
            
				<div class="option-box">
                    <p class="option-title"><?php echo _e('Breadcrumb Themes','breadcrumb'); ?></p>
                    <p class="option-info"></p>
                    
                    <select name="breadcrumb_themes">
                    	<option value="theme1" <?php if($breadcrumb_themes == 'theme1') echo 'selected'; ?> >Themes 1</option>
                    	<option value="theme2" <?php if($breadcrumb_themes == 'theme2') echo 'selected'; ?> >Themes 2</option>                        
                    	<option value="theme3" <?php if($breadcrumb_themes == 'theme3') echo 'selected'; ?> >Themes 3</option>                        
                    	<option value="theme4" <?php if($breadcrumb_themes == 'theme4') echo 'selected'; ?> >Themes 4</option>               
                    	<option value="theme5" <?php if($breadcrumb_themes == 'theme5') echo 'selected'; ?> >Themes 5</option>               
  
                    </select>
                    
                </div> 
				<div class="option-box">
                    <p class="option-title"><?php echo _e('Breadcrumb Text Color','breadcrumb'); ?></p>
                    <p class="option-info"></p>
                    <input placeholder="#686868" class="breadcrumb_color" type="text" name="breadcrumb_link_color" value="<?php if(!empty($breadcrumb_link_color)) echo $breadcrumb_link_color; ?>" />
                </div>  
                
 				<div class="option-box">
                    <p class="option-title"><?php echo _e('Breadcrumb Separator Color.','breadcrumb'); ?></p>
                    <p class="option-info"></p>
                    <input placeholder="#686868" class="breadcrumb_color" type="text" name="breadcrumb_separator_color" value="<?php if(!empty($breadcrumb_separator_color)) echo $breadcrumb_separator_color; ?>" />
                </div>                 
                        
 				<div class="option-box">
                    <p class="option-title"><?php echo _e('Breadcrumb Background Color.','breadcrumb'); ?></p>
                    <p class="option-info"></p>
                    <input placeholder="#686868" class="breadcrumb_color" type="text" name="breadcrumb_bg_color" value="<?php if(!empty($breadcrumb_bg_color)) echo $breadcrumb_bg_color; ?>" />
                </div>                         
                        
                        
                        
                        
                        
                            
               
                
                       
            </li>        
            <li style="display: none;" class="box3 tab-box">
				
				<div class="option-box">
                    <p class="option-title"><?php echo _e('Short-code for php file.','breadcrumb'); ?></p>
                    <p class="option-info"><?php echo _e('Short-code inside .php files for themes.','breadcrumb'); ?></p>
                    
                    <pre>&#60;?php<br />echo do_shortcode( '&#91;breadcrumb&#93;' ); <br />?&#62;</pre>
                    <pre></pre>

                </div>
				
				<div class="option-box">
                    <p class="option-title"><?php echo _e('Short-code for content','breadcrumb'); ?></p>
                    <p class="option-info"><?php echo _e('Short-code inside content anywhere inside content.','breadcrumb'); ?></p>		
                    <pre>[breadcrumb]</pre>
                    <pre></pre>

                </div>
                
            </li>
            
            
			<li style="display: none;" class="box4 tab-box">
				
				<div class="option-box">
                    <p class="option-title"><?php echo _e('Need Help ?','breadcrumb'); ?></p>
                    <p class="option-info">Feel free to Contact with any issue for this plugin, Ask any question via forum <a href="<?php echo breadcrumb_qa_url; ?>"><?php echo breadcrumb_qa_url; ?></a> <strong style="color:#139b50;">(free)</strong><br />

                    </p>
                    

                </div>

           
           
				<div class="option-box">
                    <p class="option-title"><?php echo _e('Upgrade','breadcrumb'); ?></p>
                    <p class="option-info">
					<?php
                
    $breadcrumb_customer_type = get_option('breadcrumb_customer_type');
    $breadcrumb_version = get_option('breadcrumb_version');
				
				
				
                    if($breadcrumb_customer_type=="free")
                        {
                    
                            echo 'You are using <strong> '.$breadcrumb_customer_type.' version  '.$breadcrumb_version.'</strong> of <strong>'.breadcrumb_plugin_name.'</strong>, To get more feature you could try our premium version. ';
                            
                            echo '<br /><a href="'.breadcrumb_pro_url.'">'.breadcrumb_pro_url.'</a>';
                            
                        }
                    else
                        {
                    
                            echo 'Thanks for using <strong> premium version  '.$breadcrumb_version.'</strong> of <strong>'.breadcrumb_plugin_name.'</strong> version '.breadcrumb_plugin_version;	
                            
                            
                        }
                    
                     ?>       

                    
                    </p>

                </div>
           
           
           
           
           
           
				<div class="option-box">
                    <p class="option-title"><?php echo _e('Submit Reviews.','breadcrumb'); ?></p>
                    <p class="option-info"><?php echo _e('We are working hard to build some awesome plugins for you and spend thousand hour for plugins. we wish your three(3) minute by submitting five star reviews at wordpress.org. if you have any issue please submit at forum.','breadcrumb'); ?></p>
                	<img class="breadcrumb-pro-pricing" src="<?php echo breadcrumb_plugin_url."assets/admin/images/five-star.png";?>" /><br />
                    <a target="_blank" href="<?php echo breadcrumb_wp_reviews; ?>">
                		<?php echo breadcrumb_wp_reviews; ?>
               		</a>
                    
                    
                    
                </div>
           
				<div class="option-box">
                    <p class="option-title"><?php echo _e('Please Share','breadcrumb'); ?></p>
                    <p class="option-info"><?php echo _e('If you like this plugin please share with your social share network.','breadcrumb'); ?></p>
                    <?php
                    
						echo breadcrumb_share_plugin();
					?>
                </div>
           
           
           
           	</li>
            
			

            
            
        </ul>
    
    
		
    </div>






<p class="submit">
                    <input class="button button-primary" type="submit" name="Submit" value="<?php _e('Save Changes' ) ?>" />
                </p>
		</form>


</div> <!-- end wrap -->
