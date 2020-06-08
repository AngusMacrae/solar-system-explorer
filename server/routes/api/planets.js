const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('planets');
});

router.get('/:planetName', async (req, res) => {
  res.send(req.params.planetName);
});

module.exports = router;
