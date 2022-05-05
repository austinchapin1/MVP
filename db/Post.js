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

const Post = mongoose.model('Post', userSchema);

module.exports = Post;
