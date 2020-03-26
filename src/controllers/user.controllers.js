const userService = require('../services/user.services')

function getUser(req, res) {
    const email = req.params.email;
    console.log('email', email);
    userService.getUser(email).then(user => {
        return res.status(200).json(user);
    }).catch(err => {
        return res.status(404).json(err);
    });
}

function getUsers(req, res) {
    userService.getUsers().then(users => {
        return res.status(200).json(users);
    }).catch(err => {
        return res.status(404).json(err);
    });
}

function createUser(req, res) {
    console.log(req.body);
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
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}