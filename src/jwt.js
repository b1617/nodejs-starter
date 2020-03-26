const jwt = require('jsonwebtoken');

function createToken(user) {
    return jwt.sign({
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setMinutes(new Date().getMinutes() + 15)
    }, 'secretId');
}

module.exports = {
    createToken
}