const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UnitSchema = new Schema({
  title: String,
  description: String,
  lessonPlans: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  assignments: [{
    type: Schema.Types.ObjectId,
    ref: 'Assignment'
  }],
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
})

const Unit = mongoose.model('Unit', UnitSchema)
module.exports = Unit
