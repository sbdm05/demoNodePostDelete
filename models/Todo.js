const mongoose = require('mongoose');

// on crée la structure de Todo
const TodoSchema = new mongoose.Schema({
  // key/value pair
  name: {
    type: String,
    required: [true, 'Requis'],
    trim: true,
    maxlength: [20, 'Ne doit pas dépasser 20 caractères'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
