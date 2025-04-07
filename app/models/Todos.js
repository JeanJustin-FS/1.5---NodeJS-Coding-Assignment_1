const mongoose = require('mongoose');
const { use } = require('..');

const todoSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    // required: [true, 'User ID is required']
  },
  id: {
    type: Number,
    // required: [true, 'ID is required'],
    unique: [true, 'ID must be unique'],
  },
  title: {
    type: String,
    // required: [true, 'Title is required'],
    // unique: [true, 'Title must be unique'],
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
},
{timestamps: true}
);

module.exports = mongoose.model('Todo', todoSchema);