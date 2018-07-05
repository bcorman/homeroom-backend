const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: String,
  body: String,
  timestamp: Date,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  type: {
    type: String,
    enum: [announcement, note, lessonPlan]
  },
  classRoom: {
    type: Schema.Types.ObjectId,
    ref: 'Class'
  },
  unit: {
    type: Schema.Types.ObjectId,
    ref: 'Unit'
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
