const userService = require('../services/user.services')

function getUser(req, res) {
    const email = req.params.email;
    console.log('email', email);
    userService.getUser(email).then((user) => {
        return res.status(200).json(user);
    }).catch((err) => {
        return res.status(404).json(err);
    });
}

function createUser(req, res) {
    console.log(req.body);
    userService.createUser(req.body).then((user) => {
        return res.status(200).json(user);
    }).catch((err) => {
        return res.status(405).json(err);
    });
}

function updateUser(req, res) {

}

function deleteUser(req, res) {

}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}