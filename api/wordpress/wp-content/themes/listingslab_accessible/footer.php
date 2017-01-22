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
				<small>&copy; Cancer Council NSW 2017</small>
				<a href="http://www.w3.org/WAI/WCAG2AAA-Conformance"
						title="Explanation of WCAG 2.0 Level Triple-A Conformance">
				<img height="32" width="88"
								src="http://www.w3.org/WAI/wcag2AAA"
								alt="Level Triple-A conformance,
								W3C WAI Web Content Accessibility Guidelines 2.0"></a>

						<img
							src="<?php print get_template_directory_uri() . '/images/logos/wcag2AAA.gif' ?>"
							alt="AAA Conformance to Web Content Accessibility Guidelines"
						/>
					</a>
			</footer>
		<?php }
		wp_footer(); ?>
	</body>
</html>
