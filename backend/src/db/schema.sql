CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE reservations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    guest_name VARCHAR(100) NOT NULL,

    access_token VARCHAR(255) NOT NULL UNIQUE,

    check_in TIMESTAMP NOT NULL,
    check_out TIMESTAMP NOT NULL,
    expires_at TIMESTAMP NOT NULL,

    status VARCHAR(20) NOT NULL DEFAULT 'active'
        CHECK (status IN ('active', 'expired', 'cancelled')),

    language VARCHAR(10) NOT NULL DEFAULT 'en'
        CHECK (language IN ('en', 'hr', 'de', 'it', 'fr', 'es', 'zh')),

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE guide_secrets (
    id SERIAL PRIMARY KEY,

    wifi_name VARCHAR(255) NOT NULL,
    wifi_password VARCHAR(255) NOT NULL,

    building_door_code VARCHAR(255) NOT NULL,
    lockbox_code VARCHAR(255) NOT NULL,

    host_phone VARCHAR(50) NOT NULL,

    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_reservations_token
ON reservations(access_token);

CREATE INDEX idx_reservations_status
ON reservations(status);

CREATE INDEX idx_reservations_expires
ON reservations(expires_at);