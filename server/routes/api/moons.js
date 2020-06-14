const express = require('express');
const router = express.Router();

router.get('/:bodyName', async (req, res) => {
  res.send(`Data about ${req.params.bodyName}`);
});

module.exports = router;
