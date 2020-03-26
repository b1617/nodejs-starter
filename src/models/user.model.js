const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    age: Number,
    email: String,
    password: String,
});

UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;