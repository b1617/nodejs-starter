const User = require('../models/user.model');

function getUser(email) {
    return new Promise((resolve, reject) => {
        User.findOne({ email }).then(user => {
            resolve(user);
        }).catch(err => {
            reject(err);
        });
    });
}

function getUsers() {
    return new Promise((resolve, reject) => {
        User.find({}).then(users => {
            resolve(users);
        }).catch(err => {
            reject(err);
        });
    });
}

function createUser(params) {
    return new Promise((resolve, reject) => {
        getUser(params.email).then(user => {
            if (user) {
                reject('user already exist');
            } else {
                const newUser = new User(params);
                newUser.save().then(res => {
                    resolve(res);
                });
            }
        });
    });
}


function deleteUser(params) {
    return new Promise((resolve, reject) => {
        const email = params.email;
        getUser(email).then(userFounded => {
            if (userFounded) {
                User.deleteOne({ email }).then(res => {
                    resolve(res);
                });
            } else {
                reject('user not exist')
            }
        });
    });
}

function updateUser(params) {
    return new Promise((resolve, reject) => {
        deleteUser(params).then(() => {
            createUser(params).then((newUser) => {
                resolve(newUser);
            });
        }).catch(err => {
            reject(err);
        });
    });
}


module.exports = {
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser,
}