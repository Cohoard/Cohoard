const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const User = require('./userModel');

const comment  = new mongoose.Schema({
  //Each comment posted should come with a name
  authorName: {type: ObjectId, required: true, ref: User.username},
  //Each comment comes with the time it was posted (Date.now())
  time: {type: String, required: true},
  //The actual content of the comment
  body: {type: String, required: true},
  //This is to associate the user with the comment.
  userId: {type: ObjectId, required: true, ref: User}
});

module.exports = mongoose.model('Comment', comment);