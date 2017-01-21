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
					<a
						href="https://www.w3.org/WAI/WCAG2AAA-Conformance"
						target="_blank"
						title="AAA Conformance to Web Content Accessibility Guidelines"
					>
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
