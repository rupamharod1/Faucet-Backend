// routes/timestampRoutes.js

const express = require('express');
const router = express.Router();
const Timestamp = require('../models/timestampModel');


// GET a timestamps
router.get('/timestamps/:address', async (req, res) => {
  const { address } = req.params;
  try {
    const timestamp = await Timestamp.findOne({ address });

    if (!timestamp) {
      return res.json(0);
    }

    res.json(timestamp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new timestamp
router.post('/timestamps', async (req, res) => {
  const { address } = req.body;
  const currentTime = new Date();
  const currentTimestampInSeconds = Math.floor(currentTime.getTime() / 1000);

  try {
    const filter = { address };
    const update = { address, timestamp: currentTimestampInSeconds };
    const options = { upsert: true, new: true };

    const updatedTimestamp = await Timestamp.findOneAndUpdate(filter, update, options);
    
    res.status(201).json(updatedTimestamp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



module.exports = router;
