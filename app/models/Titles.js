const mongoose = require('mongoose');
const { use } = require('..');

const titleSchema = new mongoose.Schema({
title: {
    type: String,
    // required: [true, 'Title is required'],
    unique: [true, 'Title must be unique'],
},
id: {
    type: Number,
    required: [true, 'id is required'],
},
completed: {
    type: Boolean,
    default: false
},
range:{
    type: Number,
    min: 0,
    max: 204,
    default: 0
},
userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: [true, 'User ID is required']
},
createdAt: {
    type: Date,
    default: Date.now
}
},
{timestamps: true}
);

module.exports = mongoose.model('Title', titleSchema);