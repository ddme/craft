<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 */

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 1,

        // The system timezone
        'timezone' => 'Europe/London',

        // Enable CSRF Protection (recommended, will be enabled by default in Craft 3)
        'enableCsrfProtection' => true,

        // Whether "index.php" should be visible in URLs
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'ddme_admin',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),

        // The length of time Craft will store data caches
        'cacheDuration' => 'P1W',

        // Prevents "Forgot Password" forms from revealing whether a valid email address was entered
        'preventUserEnumeration' => true,

        // If set to false, no updates will be updatable
        'allowUpdates' => false,

        // The string preceding a number which Craft will look for when determining if the current request is for a particular page in a paginated list of pages
        'pageTrigger' => '?page',

        // The amount of time a user verification code can be used before expiring
        'verificationCodeDuration' => 'P1W',

        // Configures Craft to generate new image transforms right when getUrl() is called, rather than when the browser first requests the image
        'generateTransformsBeforePageLoad' => true,

        // The default options Craft will apply to all search terms when searching for elements
        'defaultSearchTermOptions' => array(
            'subLeft' => true,
            'subRight' => true,
        ),
    ],

    // Dev environment settings
    'dev' => [
        // Base site URL
        'siteUrl' => null,

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,

        // If set to false, no updates will be auto-updatable
        'allowUpdates' => true,

        // Whether template caching via the {% cache %} tag should be enabled
        'enableTemplateCaching' => false,
    ],

    // Staging environment settings
    'staging' => [
        // Base site URL
        'siteUrl' => null,
    ],

    // Production environment settings
    'production' => [
        // Base site URL
        'siteUrl' => null,
    ],
];
