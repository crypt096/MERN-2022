const express = require('express');
const router = express.Router();

// Get ALL workouts
router.get('/', (req, res) => {
  res.json({mssg: 'GET All workouts'});
})

module.exports = router;