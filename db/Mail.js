const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const mailSchema = new mongoose.Schema({
  room: Number,
  type: String,
  pickUp: String
},
  {
    timestamps: true
  }
);

const Mail = mongoose.model('Mail', mailSchema);

module.exports = Mail;