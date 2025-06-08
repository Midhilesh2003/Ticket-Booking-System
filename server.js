const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
const screenRoutes = require('./routes/screenRoutes');
app.use('/api/screens', screenRoutes);
