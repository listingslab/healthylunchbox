<?php



	if ( ! defined('ABSPATH')) exit;  // if direct access 

function breadcrumb_shorten_string($string, $shorten_style='word', $wordcount=4, $ending='...'){
	
	if(empty($wordcount)){
		
		$wordcount = 4;
		}
	
	
		if($shorten_style == 'word')
			{
				$retval = $string;  //    Just in case of a problem
				$array = explode(" ", $string);
				if (count($array)<=$wordcount)
					{
					$retval = $string;
					}
				else
					{
					array_splice($array, $wordcount);
					$retval = implode(" ", $array).$ending;
					}
					
				return $retval;
				
			}
		else if($shorten_style == 'character')
			{
				if (strlen($string) > $wordcount)
					{
						$stringCut = substr($string, 0, $wordcount);
						$string = substr($stringCut, 0, strrpos($stringCut, ' ')); 
						
						return $string.$ending;
					}
				else
					{
						return $string;
					}
				
				
			}
		

		
    }
	
	
	function breadcrumb_share_plugin()
		{
			
			?>
            <iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwordpress.org%2Fplugins%2Fbreadcrumb&amp;width&amp;layout=standard&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=80&amp;appId=652982311485932" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:80px;" allowTransparency="true"></iframe>
            
            <br />
            <!-- Place this tag in your head or just before your close body tag. -->
            <script src="https://apis.google.com/js/platform.js" async defer></script>
            
            <!-- Place this tag where you want the +1 button to render. -->
            <div class="g-plusone" data-size="medium" data-annotation="inline" data-width="300" data-href="<?php echo breadcrumb_share_url; ?>"></div>
            
            <br />
            <br />
            <a href="https://twitter.com/share" class="twitter-share-button" data-url="<?php echo breadcrumb_share_url; ?>" data-text="<?php echo breadcrumb_plugin_name; ?>" data-via="ParaTheme" data-hashtags="WordPress">Tweet</a>
            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>



            <?php
			
			
			
		
		
		}
	
	
	
	
	
	