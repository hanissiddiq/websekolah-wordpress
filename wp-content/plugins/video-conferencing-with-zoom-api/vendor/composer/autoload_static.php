<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit29e970424d857ac5707b04aab1a5ae60
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
        'C' => 
        array (
            'Codemanas\\VczApi\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
        'Codemanas\\VczApi\\' => 
        array (
            0 => __DIR__ . '/../..' . '/legacy',
            1 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit29e970424d857ac5707b04aab1a5ae60::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit29e970424d857ac5707b04aab1a5ae60::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit29e970424d857ac5707b04aab1a5ae60::$classMap;

        }, null, ClassLoader::class);
    }
}
