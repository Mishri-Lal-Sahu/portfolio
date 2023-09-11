// routes/api.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo'); // Import your Mongoose model

// GET all todos
router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new todo
router.post('/todos', async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    // Add more fields as needed
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
