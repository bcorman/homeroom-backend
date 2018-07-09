const mongoose = require('mongoose')
const Schema = mongoose.Schema

let StudentSchema = new Schema({
  name: String,
  gradeLevel: Number,
  birthdate: Date,
  classes: [{
    type: Schema.Types.ObjectId,
    ref: 'Class'
  }],
  scores: [{
    type: Schema.Types.ObjectId,
    ref: 'Grade'
  }]
})

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student
