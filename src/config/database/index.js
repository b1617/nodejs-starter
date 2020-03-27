const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/starter', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
module.exports = mongoose;