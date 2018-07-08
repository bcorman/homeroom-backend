const mongoose = require('mongoose')
let Schema = mongoose.Schema
let bcrypt = require('bcrypt-nodejs')

let UserSchema = new Schema({
  email: { type: String, unique: true},
  password: String,
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
