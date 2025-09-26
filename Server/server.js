// Import required packages
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// MongoDB Database URL
const mongoDatabase = 'mongodb://localhost:27017/employeeDetails';

// Connect to MongoDB
mongoose.connect(mongoDatabase, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Database connected successfully'))
.catch(err => console.error('❌ Database connection error:', err));

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const employeeRoutes = require('../Routes/Employee.route');
app.use('/employees', employeeRoutes);

// Server Port
const port = process.env.PORT || 4000;

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
