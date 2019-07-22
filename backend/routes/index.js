
const router  = require('express').Router();
const passport = require ('../config/passport')
const {login,logout,signup,profile} = require('../controllers/auth.controller')
const {verifyToken}= require('../config/jwt')

router.post('/signup',signup)

router.post('/login',passport.authenticate('local'),login)

router.get('/logout',logout)

router.get('/profile',verifyToken,profile)

module.exports = router;
