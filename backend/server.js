require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// Routes
app.use(workoutRoutes);

// Server listening
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})