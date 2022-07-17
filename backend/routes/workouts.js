const express = require('express');
const router = express.Router();
const Workout = require('../models/WorkoutModel');

// Get ALL workouts
router.get('/', (req, res) => {
  res.json({mssg: 'GET All workouts'});
})

// GET singe workout
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET single workout'});
})

// POST new workout
router.post('/', (req, res) => {
  const { title, load, reps } = req.body;

  res.json({mssg: 'POST new workout'});
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'});
})

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a workout'});
})

module.exports = router;