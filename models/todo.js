var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var TodoSchema = new Schema({
  text: String,
  author: String
});

module.exports = mongoose.model('Todo', TodoSchema);
