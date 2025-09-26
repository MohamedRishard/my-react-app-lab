const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Employee schema
const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^.+@.+\..+$/,
    trim: true
  }
}, {
  collection: 'Employees' // Matches your MongoDB collection name
});

// Export the model
module.exports = mongoose.model('Employee', EmployeeSchema);
