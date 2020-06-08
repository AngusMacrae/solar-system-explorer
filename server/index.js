const express = require('express');
const app = express();

const planets = require('./routes/api/planets.js');
app.use('/api/planets', planets);

const satellites = require('./routes/api/satellites.js');
app.use('/api/satellites', satellites);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
