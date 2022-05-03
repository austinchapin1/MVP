const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  room: Number,
  phone: Number,
  email: String,
  mail: [String]
},
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
