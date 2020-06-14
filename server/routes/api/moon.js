const express = require('express');
const router = express.Router();

router.get('/:moonName', async (req, res) => {
  const moonsCollection = req.app.locals.db.collection('moons');
  const moon = await moonsCollection.findOne({ name: req.params.moonName });
  res.json(moon);
});

module.exports = router;
