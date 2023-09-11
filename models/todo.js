// models/todo.js
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Todo', todoSchema);