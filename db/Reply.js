const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  postID: Number,
  room: Number,
  text: String
},
  {
    timestamps: true
  }
);

const Post = mongoose.model('User', userSchema);

module.exports = Post;