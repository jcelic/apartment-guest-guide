INSERT INTO guide_secrets (
    wifi_name,
    wifi_password,
    building_door_code,
    lockbox_code,
    host_phone
)
VALUES (
    'Apartment',
    'WiFiPassword',
    '123456',
    '1234',
    '+2374986423'
);

INSERT INTO reservations (
    guest_name,
    access_token,
    check_in,
    check_out,
    expires_at,
    status,
    language
)
VALUES (
    'Test Guest',
    'jhkfds78643kjhfdwjkfjkssdifz72341',
    NOW(),
    NOW() + INTERVAL '3 days',
    NOW() + INTERVAL '5 days',
    'active',
    'en'
);