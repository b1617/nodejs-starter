const User = require('../models/user.model');

function getUser(email) {
    return new Promise((resolve, rej) => {
        User.findOne({ email }).then(user => {
            resolve(user);
        });
    });
}

function createUser(params) {
    return new Promise((resolve, reject) => {
        getUser(params.email).then((user) => {
            if (user) {
                reject();
            } else {
                const newUser = new User(params);
                newUser.save().then((res) => {
                    resolve(res);
                });
            }
        });
    });
}
module.exports = {
    getUser,
    createUser
}