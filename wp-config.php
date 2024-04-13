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
define( 'DB_NAME', 'db_websekolah' );

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
define( 'AUTH_KEY',         '1htvKz86PdzNZI0&:Np_zV0|.D)mHN=hC6gZsmELBL9,&o*]6E^E6Mv.L1!${8lc' );
define( 'SECURE_AUTH_KEY',  'AE;>*{TT(WDc(#/5{O8n5PE&M-~d!XlO#.AxU[l,AqE@r+Jbjv=CIWC9J$Ld[)72' );
define( 'LOGGED_IN_KEY',    'B)GtAupU6eZoQm>aZ1|K.c57|Nz!uxNW;E(3wvm_$f|[Z?`c#W6uzP(Cl]&cB>w/' );
define( 'NONCE_KEY',        '!IW9cQD#0<g/r^}QO74~1t`lI]V3Rd6W/J]/Hzagm(Aeu!LSW- Tg<WpNg?-p1mI' );
define( 'AUTH_SALT',        'f`vG_3[=ZP0)*.H{~XK_>#{$Md^Ce?i$-olh&WYJA$TzKuR%<)%H~s,PA96*;UJ2' );
define( 'SECURE_AUTH_SALT', 'I`2m*SRI_E=o)P@+SylpbA=lal5VyS,[Y%8#s{cZ.Ml9uP}l@`H/pYWh8M^h4o^[' );
define( 'LOGGED_IN_SALT',   'Cg4n~>%k0B9_4#TR^02%wq6|$?E4Ktn11s~0.2c`{T6BA0P~/e)7GX^TIu`%gXS_' );
define( 'NONCE_SALT',       '9`IbG;byEC2lPL7et:/qF($V8lC7Wz,!7PjX^y:5a.l?EuNdbUz^()47GU2A.[DN' );

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
