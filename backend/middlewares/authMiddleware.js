
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
   
      const user = await User.findOne({ username });

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

    
      const isPasswordValid = await user.validatePassword(password);

      if (!isPasswordValid) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return done(null, false); 
    }
    done(null, user); 
  } catch (error) {
    done(error);
  }
});
