const mongoose = require('mongoose')
const Schema = mongoose.Schema

let AssignmentSchema = new Schema({
  title: String,
  description: String,
  assignmentDate: Date,
  dueDate: Date,
  grades: [{
    type: Schema.Types.ObjectId,
    ref: 'Grade'
  }]
})

const Assignment = mongoose.model('Assignment', AssignmentSchema)

module.exports = Assignment
