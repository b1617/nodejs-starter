const jwt = require('jsonwebtoken');

function createToken(user) {
    return jwt.sign({
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, 'secretId');
}

module.exports = {
    createToken
}