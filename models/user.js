const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

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

UserSchema.pre('save', (next) => {
  const user = this
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err) }

      user.password = hash;
      next()
    })
  })
})

UserSchema.methods.comparePassword = (candidatePassword, callback) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return callback(err) }
    callback(null, isMatch)
  })
}


const User = mongoose.model('User', UserSchema)

module.exports = User
