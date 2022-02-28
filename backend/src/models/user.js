var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    secret: String
});
mongoose.model('user', userSchema);

module.exports = mongoose.model('user');
