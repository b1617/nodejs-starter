const User = require('../src/models/user.model')
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');


passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secretId'
}, (payload, done) => {
    console.log('payload', payload);
    User.findById(payload.sub).then((user) => {
        if (!user) {
            return done(null, null);
        }
        return done(null, user);
    }).catch(err => {
        return done(err, null);
    });
}));