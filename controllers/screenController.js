const db = require('../db');

exports.getSeats = async (req, res) => {
  const { screenId } = req.params;
  try {
    const result = await db.query(
      'SELECT seat_number FROM bookings WHERE screen_id = $1 AND status = $2',
      [screenId, 'CONFIRMED']
    );
    res.json(result.rows.map(row => row.seat_number));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.bookSeats = async (req, res) => {
  const { screenId } = req.params;
  const { seatNumbers } = req.body; // [1, 2, 3]

  const client = await db.connect();
  try {
    await client.query('BEGIN');

    // Lock booked seats to prevent race condition
    const locked = await client.query(
      'SELECT seat_number FROM bookings WHERE screen_id = $1 AND seat_number = ANY($2::int[]) AND status = $3 FOR UPDATE',
      [screenId, seatNumbers, 'CONFIRMED']
    );

    if (locked.rows.length > 0) {
      await client.query('ROLLBACK');
      return res.status(409).json({ message: 'Some seats already booked', seats: locked.rows.map(r => r.seat_number) });
    }

    for (const seat of seatNumbers) {
      await client.query(
        'INSERT INTO bookings (screen_id, seat_number, status) VALUES ($1, $2, $3)',
        [screenId, seat, 'CONFIRMED']
      );
    }

    await client.query('COMMIT');
    res.json({ message: 'Seats booked successfully' });
  } catch (err) {
    await client.query('ROLLBACK');
    res.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
};
