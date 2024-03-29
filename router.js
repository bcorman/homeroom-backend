const passportService = require('./services/passport');
const passport = require('passport');
const controller = require('./controllers')
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});

module.exports = (app) => {
  app.post('/signup', controller.authentication.signUp)
  app.post('/signin', requireSignIn, controller.authentication.signIn)
  app.get('/faculty', controller.user.index)
  app.post('/class', controller.class.create)
  app.post('/post', controller.post.create)
  app.get('/class/posts/:id', controller.post.indexByClass)
}
