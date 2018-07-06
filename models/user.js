const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String,
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  isAdmin: Boolean,
  classes: [{
    type: Schema.Types.ObjectId,
    ref: 'Class'
  }]
})

const User = mongoose.model('User', UserSchema)

module.exports = User
