const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const Comment = require('./commentModel.js');

const unit  = new mongoose.Schema({
  //Each unit should have a unique ID
  unitId: {type: ObjectId, required: true},
  //Each unit should be created with a name. Example of a unit name would be Unit 6: React
  unitName: {type: Number, required: true},
  //An object (could be an array but I chose object for quick lookup) of resources. Values can be strings with urls
  //or whatever other resource one might want to store. Keys in tthe object can be names/identifiers for resource
  resources: {any: Object},
  // A DocumentArray of Comment documents (crefer to commentModel.js). Essentially an array of Comment documents but with
  //additional functionality. For more info on DocumentArray, refer to https://mongoosejs.com/docs/2.7.x/docs/embedded-documents.html and
  //https://masteringjs.io/tutorials/mongoose/array
  comments: [{ type: ObjectId, ref: Comment }]
});

module.exports = mongoose.model('Unit', unit);