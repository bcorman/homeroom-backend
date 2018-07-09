const db = require('./models')

const defaultFaculty = [{
  name: 'Principle Skinner',
  username: 'cmore',
  password: 'krabappel',
  email: 'pskinner@springfield.edu',
  isAdmin: true
}, {
  name: 'Edna Krabappel',
  username: 'krabs',
  password: 'cmore',
  email: 'ekrabappel@springfield.edu',
  isAdmin: false
}]

db.User.remove({}, (err, success) => {
  if (err) { console.log(err) }
  console.log(success)
  console.log('removed all from database')

  db.User.create(defaultFaculty, (err, skinner) => {
    if (err) { console.log(err) }
    console.log(skinner)
  })
})
