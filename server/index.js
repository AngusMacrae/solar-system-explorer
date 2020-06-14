const express = require('express');
const cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const planet = require('./routes/api/planet.js');
const moons = require('./routes/api/moons.js');
const moon = require('./routes/api/moon.js');
// const bodies = require('./routes/api/bodies.js');

const connectionString = 'mongodb+srv://client:client@cluster0-kc2zl.mongodb.net/<dbname>?retryWrites=true&w=majority';

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to database');
    app.locals.db = client.db('solarSystemExplorer');
    app.use(cors());
    app.use('/api/planet', planet);
    app.use('/api/moons', moons);
    app.use('/api/moon', moon);
    // app.use('/api/bodies', bodies);
  })
  .catch(error => console.error(error));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
