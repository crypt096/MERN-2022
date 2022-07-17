const express = require('express');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})