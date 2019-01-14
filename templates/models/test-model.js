const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  field_1: {
    type: String,
    unique: true
  },

  field_2: {
    type: String
  },

  field_3: {
    type: String
  }
});

const Schema = mongoose.model('Schema', yourSchema);

module.exports = Schema;
