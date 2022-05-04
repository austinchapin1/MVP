const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  type: String,
  room: Number,
  text: String,
  urgency: String,
  responses: [String]
},
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
