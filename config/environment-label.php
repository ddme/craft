<?php

return [
    // Global settings
    '*' => [
        'showLabel' => true,
        'labelText' => CRAFT_ENVIRONMENT,
        'prefixText' => null,
        'suffixText' => ' environment',
        'labelColor' => '#cc5643',
        'textColor' => '#ffffff',
    ],
	  // Dev environment settings
    'dev' => [
        'labelColor' => '#cc1f1a',
    ],
    // Staging environment settings
    'staging' => [
        'labelColor' => '#de751f',
    ],
    // Production environment settings
    'production' => [
        'labelColor' => '#1f9d55',
    ],
];
