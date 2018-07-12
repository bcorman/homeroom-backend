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
}, {
  name: 'Otto Mann',
  classes: [],
  username: 'ottobus',
  password: 'ottobackwards',
  email: 'omann@springfield.edu',
  isAdmin: false
}]


defaultStudents = [{
  name: 'Lisa Simpson',
  birthdate: new Date(1980, 01, 01),
  gradeLevel: 6
}, {
  name: 'Bart Simpson',
  birthdate: new Date(1978, 06, 01),
  gradeLevel: 8
}]

defaultClasses = [{
  subject: 'Science',
  gradeLevel: 6
},{
  subject: 'Music',
  gradeLevel: 8
}]

defaultUnits = [{
  title: 'Heavy Metal',
  description: 'Looking at some rock',

},{
  title: 'Plate Tectonics',
  description: 'Looking at some rocks'
}]

defaultAssignments = [{
  title: 'Drop D',
  description: 'Looking at alternate tunings',
  assignmentDate: new Date(),
  dueDate: new Date(2018, 07, 01)
}, {
  title: 'Picking Up Rocks',
  descriptions: 'Find some rocks, and pick them up...',
  assignmentDate: new Date(),
  dueDate: new Date(2018, 07, 01)
}]

defaultPosts = [{
  title: 'Order new guitar picks',
  body: 'Getting real low',
  timestamp: new Date(),
  type: 'note'
}, {
  title: 'Look at rocks',
  body: 'Lesson will consist of looking at rocks for approximately 45 minutes',
  timestamp: new Date(),
  type: 'lessonPlan'
}]



// PREPARE FOR CALLBACK HELL. TURN BACK BEFORE IT'S TOO LATE


db.User.remove({}, (err, success) => {
  if (err) { console.log(err) }
  console.log(success)
  console.log('removed all users from database')

  db.Student.remove({}, (err, success) => {
    if (err) { console.log(err) }
    console.log(success)
    console.log('removed all students from database')

    db.Assignment.remove({}, (err, success) => {
      if (err) { console.log(err) }
      console.log(success)
      console.log('removed all assignments from database')

      db.Grade.remove({}, (err, success) => {
        if (err) { console.log(err) }
        console.log(success)
        console.log('removed all grades from database')

        db.Unit.remove({}, (err, success) => {
          if (err) { console.log(err) }
          console.log(success)
          console.log('removed all units from database')

          db.Post.remove({}, (err, success) => {
            if (err) { console.log(err) }
            console.log(success)
            console.log('removed all posts from database')

            db.Class.remove({}, (err, success) => {
              if (err) { console.log(err) }
              console.log(success)
              console.log('removed all classes from database')

              db.User.create(defaultFaculty, (err, newFaculty) => {
                if (err) { console.log(err) }
                console.log(newFaculty)

                db.Student.create(defaultStudents, (err, newStudents) => {
                  if (err) { console.log(err) }
                  console.log(newStudents)

                  db.Class.create(defaultClasses, (err, newClasses) => {
                    if (err) { console.log(err) }
                    console.log(newClasses)

                    db.Unit.create(defaultUnits, (err, newUnits) => {
                      if (err) { console.log(err) }
                      console.log(newUnits)

                      db.Assignment.create(defaultAssignments, (err, newAssignments) => {
                        if (err) { console.log(err) }
                        console.log(newAssignments)

                        db.Post.create(defaultPosts, (err, newPosts) => {
                          if (err) { console.log(err) }
                          console.log(newPosts)
                          console.log('seeded database')
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
