exports.index = function(req, res) {
  db.User.find({})
    .select('-password')
    .populate('classes')
    .exec(function(err, users) {
      if (err) { res.sendStatus(500) }
      res.json({faculty: users})
    })
}
