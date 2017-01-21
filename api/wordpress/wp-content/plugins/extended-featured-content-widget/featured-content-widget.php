<?php
/**
 * File Name: extended-featured-widget.php
 *  
 * Creating Featured Post Widget at Admin
 *  
 * @author Chinmoy Paul
 * @since 0.1
 * @version 0.1 
 */  
add_action( 'widgets_init', create_function( '', "register_widget('Extended_Featured_Posts_Widget');" ) );

class Extended_Featured_Posts_Widget extends WP_Widget {
  /**
	 * Holds widget settings defaults, populated in constructor.
	 *
	 * @var array
	 */
	protected $defaults;

	/**
	 * Constructor. Set the default widget options and create widget.
	 */
	function __construct() {
  
    $this->defaults = array(
      'title'                   => '',
			'post_type'               => 'post',
      'posts_per_page'          => 1,
      'orderby'                 => 'date',
      'order'                   => 'DESC',
      'offset'                  => 0,
      'taxonomy'                => '',
      'term_slug'               => '',
      'post_info'               => '[post_date] '. __( 'By', 'efwp' ) . ' [post_author_posts_link] [post_comments]',
      'post_meta'               => '[post_categories] [post_tags]',
      'show_content'            => 'excerpt',
      'content_limit'           => 150,
      'more_text'               => 'Read More &rarr;',
      'image_alignment'         => 'alignleft',
      'image_placement'         => 'before-title',
      'include_exclude'         => '',
    );
  
    $widget_ops = array(
			'classname'   => 'extended-featured-widget',
			'description' => __( 'Displays featured content by lot of filtering options', 'efwp' ),
		);

		$control_ops = array(
			'id_base' => 'extended-featured-widget',
			'width'   => 'auto',
			'height'  => 'auto',
		);

		parent::__construct( 'extended-featured-widget', __( 'Extended Featured Widget', 'efwp' ), $widget_ops, $control_ops );
  }
  
  /**
   * Creates Widget Output
   *
   * @author Chinmoy Paul
   * @since 0.1
   * @version 0.1
   * @param array $args
   * @param array $instance
   */
  function widget( $args, $instance ) {
    global $wp_query;
    extract( $args );

    /** Merge with defaults */
		$instance = wp_parse_args( (array) $instance, $this->defaults );
    $term_args = array();
    $efwp_counter = 1;

    // Fix for the WordPress 3.0 "paged" bug.
    $paged = 1;
    if ( !empty( $instance['paged'] ) && get_query_var( 'paged' ) ) { $paged = get_query_var( 'paged' ); }
    if ( !empty( $instance['paged'] ) && get_query_var( 'page' ) ) { $paged = get_query_var( 'page' ); }
    $page = intval( $paged );
            
    echo $before_widget;
    
    if( !empty($instance['page_id']) && $instance['post_type'] == 'page' )  
      $term_args['page_id'] = $instance['page_id'];
    
    if( $instance['taxonomy'] != '' && $instance['term_slug'] != '' ){
      $term_args['tax_query'] = array( 
                                      array(  'taxonomy' => $instance['taxonomy'], 
                                              'field' => 'slug', 
                                              'terms' => array( $instance['term_slug'] ) 
                                            ) 
                                      );
    }elseif( $instance['taxonomy'] != '' ){
      //$term_args['tax_query'] = array( array( 'taxonomy' => $instance['taxonomy'] ) );
    }
    
    if ( !empty( $instance['terms_ids'] ) && !empty( $instance['terms_ie'] ) ) {
        $tIDs = explode( ',', str_replace( ' ', '', $instance['terms_ids'] ) );
        $term_args['tax_query'] = array( 
                                      array(  'taxonomy' => $instance['taxonomy'], 
                                              'field' => 'id', 
                                              'terms' => $tIDs 
                                            ) 
                                      );
        
        if ( $instance['terms_ie'] == 'include' )
            $term_args['tax_query'][0]['operator'] = 'IN';
        elseif ( $instance['terms_ie'] == 'exclude' )
            $term_args['tax_query'][0]['operator'] = 'NOT IN';
    }
    
    if ( !empty( $instance['filter_ids'] ) ) {
        $IDs = explode( ',', str_replace( ' ', '', $instance['filter_ids'] ) );
        if ( $instance['include_exclude'] == 'include' )
            $term_args['post__in'] = $IDs;
        else
            $term_args['post__not_in'] = $IDs;
    }
    
    if ( !empty( $instance['offset'] ) ) {
      $term_args['offset'] = $instance['offset'];
    }
    
    // Set up the author bio
    if ( !empty( $instance['title'] ) )
      echo $before_title . apply_filters( 'widget_title', $instance['title'] ) . $after_title;
    
    if ( $instance['posts_per_page'] != 0 ) {
      
      do_action('efwp_before_loop');
      
      $query_args = array_merge( $term_args, array( 'post_type' => $instance['post_type'], 'posts_per_page' => $instance['posts_per_page'], 'orderby' => $instance['orderby'], 'order' => $instance['order'], 'paged' => $page ) );
      $query_args = apply_filters( 'efwp_query_args', $query_args, $instance );
      $feat_post = new WP_Query($query_args);
      //$temp_query = $wp_query;
      $wp_query = $feat_post;
      $post_classes = join(' ', get_post_class() ) . ' efwp-featured-post efwp-post-' . $efwp_counter;          
      if( !empty( $instance['show_grid'] ) )
        $post_classes .= ' efwp-grid-' . $instance['grid_view'] ;
            
      if ( $feat_post->have_posts() ):
        while( $feat_post->have_posts() ): $feat_post->the_post();
                   
          do_action('efwp_inside_loop');    
          
          echo '<div id="featured-post-' . get_the_ID() . '" class="' . $post_classes . '">' . "\n";
          
          efwp_before_featured_post_content( $instance );

          efwp_featured_post_content( $instance );

          efwp_after_featured_post_content( $instance );
          
          echo '</div>' . "\n";
          
          $efwp_counter++;
          
        endwhile;
        
        echo '<div style="clear:both; display:block;"></div>';
        
      endif;
      //$wp_query = $temp_query;
      wp_reset_query();                                       
        
      do_action('efwp_after_loop');
    }          
    echo $after_widget;
  }
  
  /**
   * Updates Widget Instance
   *
   * @author Chinmoy Paul
   * @since 0.1
   * @version 0.1
   * @param <type> $new_instance
   * @param <type> $old_instance
   * @return <type>
   */
  function update( $new_instance, $old_instance ) {
      if ( $new_instance['post_type'] != $old_instance['post_type'] )
        $new_instance['taxonomy'] = '';
        
      return $new_instance;
  }

  /**
   * Creates Widget Form
   *
   * @author Chinmoy Paul
   * @since 0.1
   * @version 0.1
   * @param array $instance Values set in widget isntance
   */
  function form( $instance ) {
    /** Merge with defaults */
		$instance = wp_parse_args( (array) $instance, $this->defaults );
    
    echo '<p><label for="'. $this->get_field_id( 'title' ) .'">'. __( 'Title', 'efwp' ) .':</label>
            <input type="text" id="'. $this->get_field_id( 'title' ) .'" name="'. $this->get_field_name( 'title' ) .'" value="'. esc_attr( $instance['title'] ) .'" style="width:99%;" /></p>';
    
      // Block One
      echo '<div style="background: #fafafa; border: 1px solid #e5e5e5; padding: 0 10px; margin-bottom: 5px;">';
      
        // Creating Post Type Drop Down
        echo '<p><label for="'. $this->get_field_id( 'post_type' ) .'">' . __( 'Post Type', 'efwp') .':</label>
    								<select id="'. $this->get_field_id( 'post_type' ) .'" name="'. $this->get_field_name( 'post_type' ) .'" onChange="JavaScript: fetchData(this.value,\''.$this->get_field_id( 'post_type' ).'\');">';
          
        echo '<option style="padding-right:10px;" value="none" '. selected( 'none', $instance['post_type'], false ) .'>'. __( 'Select Post Type', 'gfwa' ) .'</option>';
  			echo '<option style="padding-right:10px;" value="post" '. selected( 'post', $instance['post_type'], false ) .'>Post</option>';
        echo '<option style="padding-right:10px;" value="page" '. selected( 'page', $instance['post_type'], false ) .'>Page</option>';
    		
        echo '</select><span id="pt-spinner" class="spinner"></span></p>';
        
        // Creating Taxonomies Drop Down
        $efwp_taxonomies = get_efwp_taxonomy_list( $instance['post_type'] );
        if( $efwp_taxonomies ):
          echo '<p><label for="'. $this->get_field_id( 'taxonomy' ) .'">' . __('Taxonomy', 'efwp' ) .':</label>                
      					   <select id="'. $this->get_field_id( 'taxonomy' ) .'" name="'. $this->get_field_name( 'taxonomy' ) .'" onChange="JavaScript: fetchData(this.value,\''.$this->get_field_id( 'taxonomy' ).'\');">
                    <option style="padding-right:10px;" value="" '. selected( '', $instance['taxonomy'], false ) .'>'. __( 'All Taxonomies', 'efwp' ) .'</option>' . "\n";
                    $efwp_taxonomies = array_filter( $efwp_taxonomies, 'efwp_exclude_taxonomies' );
                    foreach( $efwp_taxonomies as $efwp_taxonomy)        
                      echo '<option style="padding-right:10px;" value="'. esc_attr( $efwp_taxonomy->name ) .'" '. selected( $efwp_taxonomy->name, $instance['taxonomy'], false ) .'>'. esc_attr( $efwp_taxonomy->labels->singular_name ) .'</option>' . "\n";
              
          echo '</select><span id="tax-spinner" class="spinner"></span></p>' . "\n";
        endif;
        // Creating Pages Drop Down
        if( $instance['post_type'] == 'page' ):
          echo '<p>
  			         <label for="'. $this->get_field_id( 'page_id' ) .'">'. __( 'Page', 'efwp' ) .':</label>' . "\n" ;
  			          wp_dropdown_pages( array( 'name' => $this->get_field_name( 'page_id' ), 'selected' => $instance['page_id'], 'show_option_none' => 'Select A Page' ) );
  		    echo '</p>' . "\n";
        endif;
        
        $terms = get_efwp_terms_list( $instance['taxonomy'] );
        // Creating Terms Drop Down        
        if( $terms ):
          echo '<p><label for="'. $this->get_field_id( 'term_slug' ) .'">' . __( 'Terms of above Taxonomy', 'efwp' ) . ':</label>                
      					   <select id="'. $this->get_field_id( 'term_slug' ) .'" name="'. $this->get_field_name( 'term_slug' ) .'" onChange="JavaScript: fetchData(this.value,\''.$this->get_field_id( 'term_slug' ).'\');">' . "\n" . 
               '    <option style="padding-right:10px;" value="" '. selected( '', $instance['term_slug'], false ) .'>'. __( 'Select Term', 'efwp' ) .'</option>' . "\n";
                    foreach( $terms as $term)        
                      echo '<option style="padding-right:10px;" value="'. esc_attr( $term->slug ) .'" '. selected( $term->slug, $instance['term_slug'], false ) .'>'. esc_attr( $term->name ) .'</option>' . "\n";
              
          echo '</select></p>' . "\n";
        endif;
        // Including/Excluding Terms 
        if( $instance['taxonomy'] != ''  && $instance['term_slug'] == ''):     
          if( $instance['terms_ie'] == '' ){
            $tstyle = ' style="display:none;"';
          }
   ?>
        <p>
					<label for="<?php echo $this->get_field_id( 'terms_ie' ); ?>"><?php _e( 'Terms Include/Exclude', 'efwp' ); ?>:</label>
					<select id="<?php echo $this->get_field_id( 'terms_ie' ); ?>" name="<?php echo $this->get_field_name( 'terms_ie' ); ?>" onChange="JavaScript: efwp_show_hide(this.value,'efwp_terms_txt_<?php echo $this->get_field_id( 'terms_ie' ); ?>');">
						<option value="" <?php selected( '', $instance['terms_ie'] ); ?>><?php _e( 'Select', 'efwp' ); ?></option>
						<option value="include" <?php selected( 'include', $instance['terms_ie'] ); ?>><?php _e( 'Include', 'efwp' ); ?></option>
						<option value="exclude" <?php selected( 'exclude', $instance['terms_ie'] ); ?>><?php _e( 'Exclude', 'efwp' ); ?></option>
					</select>
				</p>
        <div id="efwp_terms_txt_<?php echo $this->get_field_id( 'terms_ie' ); ?>" <?php echo $tstyle; ?>>
          <p>          
					 <label for="<?php echo $this->get_field_id( 'terms_ids' ); ?>"><?php _e( 'Term IDs', 'efwp' ); ?>:</label>
					 <input type="text" id="<?php echo $this->get_field_id( 'terms_ids' ); ?>" name="<?php echo $this->get_field_name( 'terms_ids' ); ?>" value="<?php echo esc_attr( $instance['terms_ids'] ); ?>" />
				  </p>
        </div>
   <?php     
        endif;
        // Including/Exclusing Post Type Items by ID
        $ptObj = get_post_type_object( $instance['post_type'] );
        if( $instance['include_exclude'] == '' ){
          $style = ' style="display:none;"';
        }
   ?>
        <p>
					<label for="<?php echo $this->get_field_id( 'include_exclude' ); ?>"><?php _e( 'Include/or Exclude', 'efwp' ); ?>:</label>
					<select id="<?php echo $this->get_field_id( 'include_exclude' ); ?>" name="<?php echo $this->get_field_name( 'include_exclude' ); ?>" onChange="JavaScript: efwp_show_hide(this.value,'efwp_ie_txt_<?php echo $this->get_field_id( 'include_exclude' ); ?>');">
						<option value="" <?php selected( '', $instance['include_exclude'] ); ?>><?php _e( 'Select', 'efwp' ); ?></option>
						<option value="include" <?php selected( 'include', $instance['include_exclude'] ); ?>><?php _e( 'Include', 'efwp' ); ?></option>
						<option value="exclude" <?php selected( 'exclude', $instance['include_exclude'] ); ?>><?php _e( 'Exclude', 'efwp' ); ?></option>
					</select>
				</p>
        <div id="efwp_ie_txt_<?php echo $this->get_field_id( 'include_exclude' ); ?>" <?php echo $style; ?>>
          <p>          
					 <label for="<?php echo $this->get_field_id( 'filter_ids' ); ?>"><?php echo $ptObj->labels->singular_name . ' '; _e( 'ID', 'efwp' ); ?>:</label>
					 <input type="text" id="<?php echo $this->get_field_id( 'filter_ids' ); ?>" name="<?php echo $this->get_field_name( 'filter_ids' ); ?>" value="<?php echo esc_attr( $instance['filter_ids'] ); ?>" />
				  </p>
        </div>
        <p>
					<label for="<?php echo $this->get_field_id( 'posts_per_page' ); ?>"><?php _e( 'Number of Posts to Show', 'efwp' ); ?>:</label>
					<input type="text" id="<?php echo $this->get_field_id( 'posts_per_page' ); ?>" name="<?php echo $this->get_field_name( 'posts_per_page' ); ?>" value="<?php echo esc_attr( $instance['posts_per_page'] ); ?>" size="2" />
				</p>

				<p>
					<label for="<?php echo $this->get_field_id( 'offset' ); ?>"><?php _e( 'Number of Posts to Offset', 'efwp' ); ?>:</label>
					<input type="text" id="<?php echo $this->get_field_id( 'offset' ); ?>" name="<?php echo $this->get_field_name( 'offset' ); ?>" value="<?php echo esc_attr( $instance['offset'] ); ?>" size="2" />
				</p>

				<p>
					<label for="<?php echo $this->get_field_id( 'orderby' ); ?>"><?php _e( 'Order By', 'efwp' ); ?>:</label>
					<select id="<?php echo $this->get_field_id( 'orderby' ); ?>" name="<?php echo $this->get_field_name( 'orderby' ); ?>">
						<option value="date" <?php selected( 'date', $instance['orderby'] ); ?>><?php _e( 'Date', 'efwp' ); ?></option>
						<option value="title" <?php selected( 'title', $instance['orderby'] ); ?>><?php _e( 'Title', 'efwp' ); ?></option>
						<option value="parent" <?php selected( 'parent', $instance['orderby'] ); ?>><?php _e( 'Parent', 'efwp' ); ?></option>
						<option value="ID" <?php selected( 'ID', $instance['orderby'] ); ?>><?php _e( 'ID', 'efwp' ); ?></option>
						<option value="comment_count" <?php selected( 'comment_count', $instance['orderby'] ); ?>><?php _e( 'Comment Count', 'efwp' ); ?></option>
						<option value="rand" <?php selected( 'rand', $instance['orderby'] ); ?>><?php _e( 'Random', 'efwp' ); ?></option>
					</select>
				</p>

				<p>
					<label for="<?php echo $this->get_field_id( 'order' ); ?>"><?php _e( 'Order', 'efwp' ); ?>:</label>
					<select id="<?php echo $this->get_field_id( 'order' ); ?>" name="<?php echo $this->get_field_name( 'order' ); ?>">
						<option value="DESC" <?php selected( 'DESC', $instance['order'] ); ?>><?php _e( 'Descending (3, 2, 1)', 'efwp' ); ?></option>
						<option value="ASC" <?php selected( 'ASC', $instance['order'] ); ?>><?php _e( 'Ascending (1, 2, 3)', 'efwp' ); ?></option>
					</select>
				</p>
   <?php     
      echo '</div>' . "\n";
      echo '<div style="background: #fafafa; border: 1px solid #e5e5e5; padding: 0 10px; margin-bottom: 5px;">';
    ?>
        <p>
					<input id="<?php echo $this->get_field_id( 'show_title' ); ?>" type="checkbox" name="<?php echo $this->get_field_name( 'show_title' ); ?>" value="1" <?php checked( $instance['show_title'] ); ?>/>
					<label for="<?php echo $this->get_field_id( 'show_title' ); ?>"><?php _e( 'Show Post Title', 'efwp' ); ?></label>
				</p>
    <?php if ($instance['post_type'] != 'page' ): ?>
				<p>
					<input id="<?php echo $this->get_field_id( 'show_byline' ); ?>" type="checkbox" name="<?php echo $this->get_field_name( 'show_byline' ); ?>" value="1" <?php checked( $instance['show_byline'] ); ?>/>
					<label for="<?php echo $this->get_field_id( 'show_byline' ); ?>"><?php _e( 'Show Post Info', 'efwp' ); ?></label>
					<input type="text" id="<?php echo $this->get_field_id( 'post_info' ); ?>" name="<?php echo $this->get_field_name( 'post_info' ); ?>" value="<?php echo esc_attr( $instance['post_info'] ); ?>" class="widefat" />
				</p>
    <?php
    endif;
    echo '</div>' . "\n";            
    echo '<div style="background: #fafafa; border: 1px solid #e5e5e5; padding: 0 10px; margin-bottom: 5px;">';
    ?>
        <p>
					<input id="<?php echo $this->get_field_id( 'show_image' ); ?>" type="checkbox" name="<?php echo $this->get_field_name( 'show_image' ); ?>" value="1" <?php checked( $instance['show_image'] ); ?>/>
					<label for="<?php echo $this->get_field_id( 'show_image' ); ?>"><?php _e( 'Show Featured Image', 'efwp' ); ?></label>
				</p>

				<p>
					<label for="<?php echo $this->get_field_id( 'image_size' ); ?>"><?php _e( 'Image Size', 'efwp' ); ?>:</label>
					<select id="<?php echo $this->get_field_id( 'image_size' ); ?>" class="image-size-selector" name="<?php echo $this->get_field_name( 'image_size' ); ?>">
					<?php
						$sizes = efwp_thumbnail_sizes();
						foreach( (array) $sizes as $name => $size )
							echo '<option value="'.esc_attr( $name ).'" '.selected( $name, $instance['image_size'], FALSE ).'>'.esc_html( $size ).'</option>';
					?>
					</select>
				</p>

				<p>
					<label for="<?php echo $this->get_field_id( 'image_alignment' ); ?>"><?php _e( 'Image Alignment', 'efwp' ); ?>:</label>
					<select id="<?php echo $this->get_field_id( 'image_alignment' ); ?>" name="<?php echo $this->get_field_name( 'image_alignment' ); ?>">
						<option value="alignnone">- <?php _e( 'None', 'efwp' ); ?> -</option>
						<option value="alignleft" <?php selected( 'alignleft', $instance['image_alignment'] ); ?>><?php _e( 'Left', 'efwp' ); ?></option>
						<option value="alignright" <?php selected( 'alignright', $instance['image_alignment'] ); ?>><?php _e( 'Right', 'efwp' ); ?></option>
            <option value="aligncenter" <?php selected( 'aligncenter', $instance['image_alignment'] ); ?>><?php _e( 'Center', 'efwp' ); ?></option>
					</select>
				</p>
        <p>
					<label for="<?php echo $this->get_field_id( 'image_placement' ); ?>"><?php _e( 'Image Placement', 'efwp' ); ?>:</label>
					<select id="<?php echo $this->get_field_id( 'image_placement' ); ?>" name="<?php echo $this->get_field_name( 'image_placement' ); ?>">
						<option value="before-title" <?php selected( 'before-title', $instance['image_placement'] ); ?>><?php _e( 'Before Title', 'efwp' ); ?></option>
						<option value="after-title" <?php selected( 'after-title', $instance['image_placement'] ); ?>><?php _e( 'After Title', 'efwp' ); ?></option>
					</select>
				</p>
        <p>
					<label for="<?php echo $this->get_field_id( 'link_image' ); ?>"><?php _e( 'Link Image', 'efwp' ); ?>:</label>
					<select id="<?php echo $this->get_field_id( 'link_image' ); ?>" name="<?php echo $this->get_field_name( 'link_image' ); ?>">
						<option value="yes" <?php selected( 'yes', $instance['link_image'] ); ?>><?php _e( 'Yes', 'efwp' ); ?></option>
						<option value="no" <?php selected( 'no', $instance['link_image'] ); ?>><?php _e( 'No', 'efwp' ); ?></option>
					</select>
				</p>
      </div>
      <div style="background: #fafafa; border: 1px solid #e5e5e5; padding: 0 10px; margin-bottom: 5px;">
        <p>
					<label for="<?php echo $this->get_field_id( 'show_content' ); ?>"><?php _e( 'Content Type', 'efwp' ); ?>:</label>
					<select id="<?php echo $this->get_field_id( 'show_content' ); ?>" name="<?php echo $this->get_field_name( 'show_content' ); ?>" onChange="JavaScript: efwp_show_hide(this.value, 'id_<?php echo $this->get_field_id( 'content_limit' ); ?>');">
						<option value="content" <?php selected( 'content', $instance['show_content'] ); ?>><?php _e( 'Full Content', 'efwp' ); ?></option>
            <?php if ($instance['post_type'] != 'page' ): ?>
						<option value="excerpt" <?php selected( 'excerpt', $instance['show_content'] ); ?>><?php _e( 'Excerpt', 'efwp' ); ?></option>
            <?php endif; ?>
						<option value="content-limit" <?php selected( 'content-limit', $instance['show_content'] ); ?>><?php _e( 'Content Limit', 'efwp' ); ?></option>
						<option value="" <?php selected( '', $instance['show_content'] ); ?>><?php _e( 'No Content', 'efwp' ); ?></option>
					</select>
					<br />
          <span id="id_<?php echo $this->get_field_id( 'content_limit' ); ?>" <?php if( $instance['show_content'] !== 'content-limit' ){ echo 'style="display:none;"';} ?>>
  					<label for="<?php echo $this->get_field_id( 'content_limit' ); ?>"><?php _e( 'Limit content to', 'efwp' ); ?>
  						<input type="text" id="<?php echo $this->get_field_id( 'content_limit' ); ?>" name="<?php echo $this->get_field_name( 'content_limit' ); ?>" value="<?php echo esc_attr( intval( $instance['content_limit'] ) ); ?>" size="3" />
  						<?php _e( 'characters', 'efwp' ); ?>
  					</label>
          </span>
				</p>
        <p>
					<label for="<?php echo $this->get_field_id( 'more_text' ); ?>"><?php _e( 'More Text', 'efwp' ); ?>:</label>
					<input type="text" id="<?php echo $this->get_field_id( 'more_text' ); ?>" name="<?php echo $this->get_field_name( 'more_text' ); ?>" value="<?php echo esc_attr( $instance['more_text'] ); ?>" />
				</p>
      <?php if ($instance['post_type'] != 'page' ): ?>
        <p>
					<input id="<?php echo $this->get_field_id( 'show_meta' ); ?>" type="checkbox" name="<?php echo $this->get_field_name( 'show_meta' ); ?>" value="1" <?php checked( $instance['show_meta'] ); ?>/>
					<label for="<?php echo $this->get_field_id( 'show_meta' ); ?>"><?php _e( 'Show Post Meta', 'efwp' ); ?></label>
					<input type="text" id="<?php echo $this->get_field_id( 'post_meta' ); ?>" name="<?php echo $this->get_field_name( 'post_meta' ); ?>" value="<?php echo esc_attr( $instance['post_meta'] ); ?>" class="widefat" />
				</p>
    <?php
      endif;
    echo '</div>' . "\n";
  }
}

add_action( 'admin_print_footer_scripts', 'efwp_fetchData' );
function efwp_fetchData(){
?>
<script type="text/javascript">
  function fetchData(instance_val, select_id){     
    (function(efwp) {
    
      wpWidgets.save( efwp('#' + select_id).closest('div.widget'), 0, 1, 0 );
      return false;   
      
    })(jQuery);
  }
  
  function efwp_show_hide(state, id){
    jQuery(document).ready(function(){
      if( state == 'include' || state == 'exclude' || state == 'content-limit' )
        jQuery('#' + id).css('display', 'block');
      else
        jQuery('#' + id).css('display', 'none');
    });
  }
</script>
<?php
}

add_action( 'efwp_before_featured_post_content', 'efwp_do_featured_image', 5, 1 );
add_action( 'efwp_featured_post_content', 'efwp_do_featured_image', 5, 1 );
add_action( 'efwp_before_featured_post_content', 'efwp_do_post_title', 10, 1 );
add_filter( 'efwp_do_post_info', 'do_shortcode', 20 );
add_action( 'efwp_before_featured_post_content', 'efwp_do_post_info', 12, 1 );
add_action( 'efwp_featured_post_content', 'efwp_do_post_content', 10, 1 );
add_filter( 'efwp_do_post_meta', 'do_shortcode', 20 );
add_action( 'efwp_featured_post_content', 'efwp_do_post_meta', 12, 1 );

function efwp_do_post_title( $instance ){
  if ( !empty( $instance['show_title'] ) )
    printf( '<h2 class="entry-title"><a href="%s" rel="bookmark">%s</a></h2>', esc_url( get_permalink() ), the_title_attribute( 'echo=0' ) );
}

function efwp_do_post_info( $instance ){
  if ( !empty( $instance['show_byline'] ) && !empty( $instance['post_info'] ) )
    printf( '<p class="post-info">%s</p>', apply_filters( 'efwp_do_post_info', esc_html( $instance['post_info'] ) ) );
}

function efwp_do_featured_image( $instance ){
  global $post;
  if( has_post_thumbnail() && !empty( $instance['show_image'] ) ):
    $align = $instance['image_alignment'] ? esc_attr( $instance['image_alignment'] ) : 'alignnone';
    $image = get_the_post_thumbnail( $post->ID, $instance['image_size'], array('class' => $align) );
    $image = $instance['link_image'] == 'yes' ? sprintf( '<a href="%s" title="%s" class="%s">%s</a>', get_permalink(), the_title_attribute( 'echo=0' ), $align, $image ) : $image;
    
    echo current_filter() == 'efwp_before_featured_post_content' && $instance['image_placement'] == 'before-title' && !empty( $instance['show_image'] ) ? $image : '';
    echo current_filter() == 'efwp_featured_post_content' && $instance['image_placement'] == 'after-title' && !empty( $instance['show_image'] ) ? $image : '';
  else:
    return;
  endif;
}

function efwp_do_post_content( $instance ){
  if ( !empty( $instance['show_content'] ) ) { 
    echo '<div class="entry-content">';
    if ( $instance['show_content'] == 'excerpt' ){
        $excerpt = get_the_excerpt();
        $link   = sprintf( ' <a href="%s" class="more-link">%s</a>', get_permalink(), esc_html( $instance['more_text'] ) );
        
        echo '<p>' . $excerpt . $link . '</p>';
    }
    elseif ( $instance['show_content'] == 'content-limit' )
        the_efwp_post_content_limit( ( int ) $instance['content_limit'], esc_html( $instance['more_text'] ) );
    else
        the_content( esc_html( $instance['more_text'] ) );
        
    echo '</div>';
  }  
}

function efwp_do_post_meta($instance){
  if ( !empty( $instance['show_meta'] ) && !empty( $instance['post_meta'] ) )
    printf( '<p class="post-meta">%s</p>', apply_filters( 'efwp_do_post_meta', esc_html( $instance['post_meta'] ) ) );
}