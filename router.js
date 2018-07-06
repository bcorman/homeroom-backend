const passportService = require('./services/passport');
const passport = require('passport');
const controller = require('./controllers')


const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});

module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send({message: 'S3CR3T M3SS4G3'})
  })
  app.post('/signup', controller.authentication.signup)
  // app.post('/signin', requireSignIn, controller.authentication.signin);
}
