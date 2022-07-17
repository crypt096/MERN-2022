const express = require('express');
const router = express.Router();

// Get ALL workouts
router.get('/', (req, res) => {
  res.json({mssg: 'GET All workouts'});
})

// GET singe workout
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET single workout'});
})

module.exports = router;