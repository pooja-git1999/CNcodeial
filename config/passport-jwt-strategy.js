const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

let opts ={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'codial'
}

passport.use(new JWTStrategy(opts, function(jwtPayload, done) {
    User.findById(jwtPayload._id, function(err, user) {
        if (err) {
            console.log('error in finding user from jwt');
            return;
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

module.exports = passport;