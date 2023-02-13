<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'firstWebPage' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '{jd)?TAep K%I~91[.rLpecAWjb*57MCh>?Fu$V&F:JN{iH6Q;?=gNWSiqz6=]T3' );
define( 'SECURE_AUTH_KEY',  'cI:bkZ~%e0UT+IVp@y$W-XE7/(Z4yHD4pM!)Mp22vy4X]?WHRR5Cjx?S~$oYL?28' );
define( 'LOGGED_IN_KEY',    'C<{>Ps8h0[v-5>NC#,!.88mM(m{VUD`,W7Ghi}Vs,8QHdjCPHdy>SCGJB`N/k(?-' );
define( 'NONCE_KEY',        'KtN&fo3DlmPbNixYc7C(RB3ykUmvkD3g$5`!/3z[ u9?j2&lp96#9qBw<@7H%/N.' );
define( 'AUTH_SALT',        '.i0AQV9%P(Bl45bdCP&o[;TCzC$4cjtn{0SGc]B$Tlb}<U syiN6P)RjEq97;f6r' );
define( 'SECURE_AUTH_SALT', '.Fx9S$EP*Bv!b4.{(jjg-ehQ4R(PU9~*(75i,ripmbP;)/~mG]#fh &^0y!mU[Ek' );
define( 'LOGGED_IN_SALT',   '4?{LmIaL(_9kYhI].lRvfFxkp%h4=eKfXvI*l|Kq%HYJ(ajaN<VH/aZ}7Yq;p6mX' );
define( 'NONCE_SALT',       ' *hVM:dyT}k%tSA-h>5o%W%0 s+Fj=VNV|Ki99~T0^&L9,[sI?NQRk&S~/6~ArCS' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

define( 'FS_METHOD', 'direct' );
