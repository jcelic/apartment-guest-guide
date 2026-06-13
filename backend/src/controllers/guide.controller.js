import { pool } from '../db/pool.js';

export const getGuide = async (req, res) => {
  try {
    const { token } = req.params;

    const result = await pool.query(
      `
      SELECT id, guest_name, check_in, check_out, expires_at, status, language
      FROM reservations
      WHERE access_token = $1
      LIMIT 1
      `,
      [token],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Guide not found',
      });
    }

    const reservation = result.rows[0];

    if (reservation.status !== 'active') {
      return res.status(403).json({
        message: 'Guide inactive',
      });
    }

    if (new Date(reservation.expires_at) < new Date()) {
      return res.status(410).json({
        message: 'Guide expired',
      });
    }

    res.json(reservation);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server error',
    });
  }
};

export const getGuideSecrets = async (req, res) => {
  try {
    const { token } = req.params;

    const reservationResult = await pool.query(
      `
      SELECT id, status, expires_at
      FROM reservations
      WHERE access_token = $1
      LIMIT 1
      `,
      [token],
    );

    if (reservationResult.rows.length === 0) {
      return res.status(404).json({
        message: 'Guide not found',
      });
    }

    const reservation = reservationResult.rows[0];

    if (reservation.status !== 'active') {
      return res.status(403).json({
        message: 'Guide inactive',
      });
    }

    if (new Date(reservation.expires_at) < new Date()) {
      return res.status(410).json({
        message: 'Guide expired',
      });
    }

    const secretsResult = await pool.query(
      `
      SELECT
        wifi_name,
        wifi_password,
        building_door_code,
        lockbox_code,
        host_phone
      FROM guide_secrets
      ORDER BY updated_at DESC
      LIMIT 1
      `,
    );

    if (secretsResult.rows.length === 0) {
      return res.status(404).json({
        message: 'Guide secrets not found',
      });
    }

    res.json(secretsResult.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server error',
    });
  }
};
