const Workout = require('../models/workoutModel');

// Get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get single workout

// Create workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // Add doc to db
  try {
    const workout = await Workout.create({
      title,
      load,
      reps
    }) 
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Update workout

// Delete workout

module.exports = {
  createWorkout,
  getWorkouts
}