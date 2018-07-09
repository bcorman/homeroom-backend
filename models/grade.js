const mongoose = require('mongoose')
const Schema = mongoose.Schema

let GradeSchema = new Schema({
  grade: Number,
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  },
  assignment: {
    type: Schema.Types.ObjectId,
    ref: 'assignment'
  }
})

const Grade = mongoose.model('Grade', GradeSchema)

module.exports = Grade
