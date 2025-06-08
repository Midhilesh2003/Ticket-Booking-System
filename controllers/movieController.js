const db = require('../db');

exports.getMovies = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM movies ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addMovie = async (req, res) => {
  try {
    const { title, description } = req.body;
    const poster = req.file ? req.file.path : null;

    const result = await db.query(
      'INSERT INTO movies (title, description, poster) VALUES ($1, $2, $3) RETURNING *',
      [title, description, poster]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM movies WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMovieScreens = async (req, res) => {
    const { movieId } = req.params;
    try {
      const result = await db.query(`
        SELECT screens.id, theatres.name as theatre_name, theatres.city
        FROM screens
        JOIN theatres ON screens.theatre_id = theatres.id
        WHERE screens.movie_id = $1
      `, [movieId]);

      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
