const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/homeroom', { useNewUrlParser: true })

new Promise((resolve, reject) => {
  setTimeout(() => reject('woops'), 500);
})

module.exports = {
  Assignment: require('./assignment.js'),
  Class: require('./class.js'),
  Grade: require('./grade.js'),
  Post: require('./post.js'),
  Student: require('./student.js'),
  Unit: require('./unit.js'),
  User: require('./user.js')
}
