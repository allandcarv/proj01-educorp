import passport from 'passport';
import { Strategy } from 'passport-local';

import User from '../models/User';

passport.use(
  new Strategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ where: { emailUsr: email } })
      .then(user => {
        if (!user) {
          return done(null, false, { error: 'User does not exist.' });
        }

        if (user.senhaUsr !== password) {
          return done(null, false, { error: 'Invalid password. ' });
        }

        return done(null, user);
      })
      .catch(done);
  })
);

passport.serializeUser((user, done) => {
  return done(null, user.idUsr);
});

passport.deserializeUser((idUsr, done) => {
  User.findByPk(idUsr)
    .then(user => {
      return done(null, user);
    })
    .catch(done);
});

export default passport;
