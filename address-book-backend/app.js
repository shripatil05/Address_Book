const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const addressRoutes = require('./routes/addressRoutes'); // Importing routes from the routes folder

const app = express();

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: true })); // Changed to true for nested parsing
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection with error handling
mongoose.connect('mongodb://127.0.0.1:27017/addressbook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB successfully'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Using routes from addressRoutes.js
app.use('/api', addressRoutes);

// Improved error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong. Please try again later.' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
