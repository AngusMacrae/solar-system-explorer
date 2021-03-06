const express = require('express');
const router = express.Router();

router.get('/:planetName', async (req, res) => {
  const moonsCollection = req.app.locals.db.collection('moons');
  const moons = await moonsCollection.find({ planet: req.params.planetName }).toArray();
  res.json(moons);
});

module.exports = router;
