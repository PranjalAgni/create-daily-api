const express = require('express');
const Database = require('../models/test-model');
const router = express.Router();

router.get('/user', (req, res) => {
  // Perform DB operations
});

module.exports = router;
