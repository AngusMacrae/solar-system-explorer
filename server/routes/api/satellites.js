const express = require('express');
const router = express.Router();

router.get('/:planetName', async (req, res) => {
  res.send(`List satellites of ${req.params.planetName}`);
});

module.exports = router;
