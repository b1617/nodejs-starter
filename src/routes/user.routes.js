require('../passport');
const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user.controllers');
const router = express.Router();
const passportAuth = (strategy) =>
  passport.authenticate(strategy, { session: false });

router.get('/', passportAuth('jwt'), userController.getUsers);
router.post('/signin', passportAuth('local'), userController.signIn);
router.post('/signup', userController.signUp);
router.put('/', passportAuth('jwt'), userController.updateUser);
router.delete('/', passportAuth('jwt'), userController.deleteUser);
