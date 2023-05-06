const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const env = require("./../config/environment");
let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: env.secretKey,
};

passport.use(
  new JWTStrategy(opts, function (jwtPayLoad, done) {
    const user = {
      username: env.username,
      password: env.password,
    };

    if (user) {
      return done(null, user);
    }
  })
);

module.exports = passport;
