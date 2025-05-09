const mongoose = require('mongoose');

// Define the schema for storing address information
const addressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true // Ensures email uniqueness if necessary
  },
  contact: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  }
});

// Export the model
module.exports = mongoose.model('Address', addressSchema, 'addresses');
