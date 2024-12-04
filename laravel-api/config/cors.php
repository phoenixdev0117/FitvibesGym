<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'reservar/*'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['http://192.168.142.43:3000'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,
];