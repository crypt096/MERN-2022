const Workout = require('../models/workout');

// Get all workouts

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