var db = require('./models')

db.User.remove({}, (err, success) => {
  if (err) { console.log(err) }
  console.log(success)
  console.log('removed all from database')
})

process.exit()
