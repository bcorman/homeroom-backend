const db = require('../models')

exports.indexByClass = function (req, res) {
  console.log(`on line 4 ${req}`)
  console.log(req.params.id)
  db.Class.findOne({_id: req.params.id}, function (err, foundClass) {
    if (err) { console.log(err) }
    console.log(foundClass)
    db.Post.find({class: foundClass })

    .populate('author')
    .exec(function (err, foundPosts) {
      if (err) { res. sendStatus(400) }
      console.log(foundPosts)

      res.json({posts: foundPosts})
    })
  })
}

exports.create = function (req, res) {
  console.log(req.body)
  db.User.findOne({name: req.body.author})
  .select('-password')
  .exec(function (err, author) {
    if (err) { res.sendStatus(400) }
      db.Class.findOne({_id: req.body.currentClass._id}, function (err, foundClass) {
        let newPost = new db.Post({
          title: req.body.title,
          body: req.body.body,
          author,
          timestamp: req.body.timestamp,
          type: 'announcement',
          class: foundClass
        })
        newPost.save(function (err, post) {
          foundClass.announcements.push(post)
          foundClass.save(function(err, success) {
            if (err) { res.sendStatus(400) }

            res.json({post})
        })
      })
    })
  })
}
