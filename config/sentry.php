<?php

return [
    'clientDsn'     => '$SENTRY_DSN', // NOT getenv('SENTRY_DSN')
    'excludedCodes' => '400, 404', // Comma-separated list
];
