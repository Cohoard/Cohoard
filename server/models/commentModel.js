const mongoose = require('mongoose');

const comment  = new mongoose.Schema({
  //Each comment should have a unique ID
  commentId: {type: ObjectId, required: true},
  //Each comment posted should come with a name
  authorName: {type: Number, required: true},
  //Each comment comes with the time it was posted (Date.now())
  time: {type: String, required: true},
  //The actual content of the comment
  body: {type: String, required: true}
});

module.exports = mongoose.model('Comment', comment);