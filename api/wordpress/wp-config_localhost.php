<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'healthylunchbox');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Il=v([)MSWpkilW#cW-##t=<Mu~4_03D{1U/LaNESklpsjKbUZ:R.wj3%G*dFKf{');
define('SECURE_AUTH_KEY',  'D<7 ghr*+o09zEVo>b:9-UGj}/_<nQ&D=} UuL6C8oprrt+c9<Mkr*bj2r/vyw^8');
define('LOGGED_IN_KEY',    ' .HYeNKZW-@&2jiH3N|?8w(=PE[,8X9Id%O3]l4jVu[BWi3K*+mZ1ugX&a[t&Z@I');
define('NONCE_KEY',        'JG54^pGt;,i3*z;Sr3(s8[bx7/Kf+/RC:OWGRY(+5<#6{<F~qp1#WGxQN zji!A)');
define('AUTH_SALT',        'r`_M9$@$u8$ GE!lZ1 =5.N7-utA<NALug<x(ea~P;#MR&;xQULiU]4hTge4Sx^f');
define('SECURE_AUTH_SALT', 'AO2<&7~SKVdhR >NLQnIqg Z5Tm4oOf=;Wy}&8PtNm<51Him/SY_k`y<Wax7WE>2');
define('LOGGED_IN_SALT',   'E[jr.&OJbvVnTlB#N-NTE<89nw;n41IC!&L?LFSa!-_B6uYcA*^~AA5A9NE*K l)');
define('NONCE_SALT',       'n:1P=}wv:)1x-G)k-.uxy`LaQBoF)}w^P0h:nr%.PlG}b0n?Rz]Tv1:&U}HlOEx.');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
