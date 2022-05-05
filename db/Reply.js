const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  postID: String,
  room: Number,
  text: String
},
  {
    timestamps: true
  }
);

const Reply = mongoose.model('Reply', userSchema);

module.exports = Reply;