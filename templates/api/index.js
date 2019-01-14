const express = require('express');

const emojis = require('./emojis');

const saveDB = require('./save-db');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API yay yay 🎉✨🎉'
  });
});

router.use('/emojis', emojis);
router.use('/save', saveDB);

module.exports = router;
