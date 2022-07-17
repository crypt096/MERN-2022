const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})