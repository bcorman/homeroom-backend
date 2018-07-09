const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ClassSchema = new Schema({
  gradeLevel: Number,
  subject: {
    type: String,
    enum: ['math', 'science', 'english', 'foreignLanguage', 'humanities', 'art', 'music']
  },
  units: [{
    type: Schema.Types.ObjectId,
    ref: 'Unit'
  }],
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'Student'
  }],
  announcements: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
})

const Class = mongoose.model('Class', ClassSchema)
module.exports = Class
