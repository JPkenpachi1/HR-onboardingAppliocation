// server.js


require('dotenv').config();
const config = require("./config.json");
const mongoose   = require('mongoose')

mongoose.connect(config.ConnectionStrings.DefaultConnection)
const express = require('express');
const app = express();
const PORT = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic GET route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Basic POST route
app.post('/echo', (req, res) => {
  res.json({ message: req.body.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
