// models/timestampModel.js

const mongoose = require('mongoose');

const timestampSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
});

const Timestamp = mongoose.model('Timestamp', timestampSchema);

module.exports = Timestamp;
