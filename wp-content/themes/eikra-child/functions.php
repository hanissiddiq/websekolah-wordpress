<?php
add_action( 'wp_enqueue_scripts', 'eikra_child_styles', 18 );
function eikra_child_styles() {
	wp_enqueue_style( 'child-style', get_stylesheet_uri() );
}

add_action( 'after_setup_theme', 'eikra_child_theme_setup' );
function eikra_child_theme_setup() {
    load_child_theme_textdomain( 'eikra', get_stylesheet_directory() . '/languages' );
}