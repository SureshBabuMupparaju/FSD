const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    name: String,
  });

  const Course = mongoose.model('Course', courseSchema);

  const taskSchema = new mongoose.Schema({
    name: String,
    dueDate: Date,
    details: String,
    courseId: String,
  });

  const Task = mongoose.model('Task', taskSchema);