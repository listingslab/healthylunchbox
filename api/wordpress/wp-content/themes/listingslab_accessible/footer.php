<?php
/**
 * The footer template
 *
 * @package Octothorpe
 * @subpackage Templates
 */
?>

		</div>

		<?php get_sidebar();
		if ( has_nav_menu( 'footer' ) ) { ?>
			<footer>

				<?php
					$baseurl = "http://api.healthylunchbox.com.au/wp-json/hlbapi/";
					$jsonLinkUrl = $baseurl . 'recipes';
			 	?>

				<a href="<?php print $jsonLinkUrl; ?>">JSON API</a>

				<small>&copy; Cancer Council NSW 2017</small>

				<a href="http://www.w3.org/WAI/WCAG2AAA-Conformance"
						title="Explanation of WCAG 2.0 Level Triple-A Conformance">
						<img height="32" width="88"
								src="http://www.w3.org/WAI/wcag2AAA"
								alt="Level Triple-A conformance,
								W3C WAI Web Content Accessibility Guidelines 2.0"></a>
					</a>
			</footer>
		<?php }
		wp_footer(); ?>
	</body>
</html>
