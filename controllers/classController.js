const db = require('../models')


exports.create = function (req, res) {

  db.User.findOne({name: req.body.faculty}, function (err, teacher) {
    if (err) { res.sendStatus(500) }
    db.Class.create({gradeLevel: req.body.grade, subject: req.body.subject}, function (err, newClass) {
      teacher['classes'].push(newClass)
      teacher.save(function(err, success) {
        console.log(success)
        console.log(newClass)
        db.Class.find({}, function (err, allClasses) {
          if (err) { res.sendStatus(500) }
          res.json({ classes: allClasses })
        })
      })
    })
  })
}
