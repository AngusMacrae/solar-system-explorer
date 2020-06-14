const express = require('express');
const cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const planets = require('./routes/api/planets.js');
// const moons = require('./routes/api/moons.js');
// const bodies = require('./routes/api/bodies.js');

const connectionString = 'mongodb+srv://client:client@cluster0-kc2zl.mongodb.net/<dbname>?retryWrites=true&w=majority';

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to database');
    app.locals.db = client.db('solarSystemExplorer');
    app.use(cors());
    // const planetsCollection = db.collection('planets');
    // app.get('/api/planets/:planetName', async (req, res) => {
    //   const planet = await planetsCollection.findOne({ name: req.params.planetName });
    //   res.json(planet);
    // });
    app.use('/api/planets', planets);
    // app.use('/api/moons', moons);
    // app.use('/api/bodies', bodies);
  })
  .catch(error => console.error(error));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
