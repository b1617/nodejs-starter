const mongoose = require('mongoose');

function start() {
    mongoose.connect('mongodb://localhost/starter', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

function close() {
    mongoose.connection.close();
}
module.exports = {
    start,
    close
};