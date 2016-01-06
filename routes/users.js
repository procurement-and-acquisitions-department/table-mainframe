var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.user);
});

router.get('/authenticate',
  passport.authenticate('auth0', { failureRedirect: '/error' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/users");
  });

module.exports = router;
