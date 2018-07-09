const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ClassSchema = new Schema({
  gradeLevel: Number,
  subject: {
    type: String,
    enum: ['Math', 'Science', 'English', 'ForeignLanguage', 'Humanities', 'Art', 'Music']
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
