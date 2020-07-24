// Auth middleware
const passport = require("passport");
// Strategy to authenticate locally
const LocalStrategy = require("passport-local").Strategy;
// JWT Strategy
const JwtStrategy = require("passport-jwt").Strategy;
require("dotenv").config();
const User = require("./models/User");

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

// authorization
// We extract the JWT from Cookies
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_SECRET,
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }
  )
);

// authentication
// Will be triggred when we try to authenticate using username & password
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      // Something wrong with DB
      if (err) return done(err);
      // No user exists
      if (!user) return done(null, false);
      // Check if password is correct
      user.comparePassword(password, done);
    });
  })
);
