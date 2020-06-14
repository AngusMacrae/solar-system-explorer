const express = require('express');
const router = express.Router();

// router.get('/', async (req, res) => {
//   res.send('planet');
// });

router.get('/:planetName', async (req, res) => {
  const planetsCollection = req.app.locals.db.collection('planets');
  const planet = await planetsCollection.findOne({ name: req.params.planetName });
  res.json(planet);
});

module.exports = router;
