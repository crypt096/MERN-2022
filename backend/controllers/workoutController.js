const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// Get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Workout not found' });
  }

  const workout = await Workout.findById(id);

  if(!workout) {
    return res.status(404).json({ error: 'Workout not found' });
  }

  res.status(200).json(workout);
}

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
const updateWorkout = async (req, res) => {
  // const workout = await Workout.findById(req.params.id);
}

// Delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Workout not found' });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });
}

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout
}