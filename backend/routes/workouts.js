const express = require('express');
const router = express.Router();
const { 
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout
} = require('../controllers/workoutController');

// Get ALL workouts
router.get('/', getWorkouts);

// GET singe workout
router.get('/:id', getWorkout); 

// POST new workout
router.post('/', createWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

module.exports = router;