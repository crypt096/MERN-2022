const express = require('express');
const router = express.Router();
const { 
  createWorkout
} = require('../controllers/workoutController');

// Get ALL workouts
router.get('/', (req, res) => {
  res.json({mssg: 'GET All workouts'});
})

// GET singe workout
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET single workout'});
})

// POST new workout
router.post('/', createWorkout);

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'});
})

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a workout'});
})

module.exports = router;