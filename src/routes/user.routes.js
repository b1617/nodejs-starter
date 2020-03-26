const express = require('express');
const userController = require('../controllers/user.controllers');
const router = express.Router();


router.get('/:email', userController.getUser);
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/', userController.updateUser);
router.delete('/', userController.deleteUser);

module.exports = router;