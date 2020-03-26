const express = require('express');
const passport = require('passport');
const passportConfig = require('../passport');
const userController = require('../controllers/user.controllers');
const router = express.Router();


router.get('/:email', userController.getUser);
router.get('/', passport.authenticate('jwt', { session: false }), userController.getUsers);
router.post('/', userController.createUser);
router.put('/', userController.updateUser);
router.delete('/', userController.deleteUser);

module.exports = router;