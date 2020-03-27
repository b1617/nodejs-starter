const userService = require('../services/user.services')
const jwt = require('../jwt');

function signIn(req, res) {
    const token = jwt.createToken(req.user)
    res.status(200).json({ user: req.user, token });
}

function getUsers(req, res) {
    userService.getUsers().then(users => {
        return res.status(200).json(users);
    }).catch(err => {
        return res.status(404).json(err);
    });
}

function signUp(req, res) {
    userService.createUser(req.body).then(user => {
        return res.status(200).json(user);
    }).catch(err => {
        return res.status(405).json(err);
    });
}

function updateUser(req, res) {
    userService.updateUser(req.body).then(user => {
        return res.status(200).json(user);
    }).catch(err => {
        return res.status(401).json(err);
    });
}

function deleteUser(req, res) {
    userService.deleteUser(req.body).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(401).json(err);
    });

}

module.exports = {
    signIn,
    getUsers,
    signUp,
    updateUser,
    deleteUser
}