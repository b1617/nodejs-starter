require('../passport');
const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user.controllers');
const router = express.Router();


router.get('/', passport.authenticate('jwt', { session: false }), userController.getUsers);

router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn);
router.post('/signup', userController.signUp);

router.put('/', passport.authenticate('jwt', { session: false }), userController.updateUser);
router.delete('/', passport.authenticate('jwt', { session: false }), userController.deleteUser);

module.exports = router;