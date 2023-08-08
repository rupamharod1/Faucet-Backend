// index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const timestampRoutes = require('./routes/timestampRoutes');

const app = express();
const PORT = 2000;

// Configure middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/timestampDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Use routes
app.use('/api', timestampRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

