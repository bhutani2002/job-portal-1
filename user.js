// dependencies
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const dotenv = require('dotenv').config();
// connect to database
mongoose.connect(process.env.DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Create Model
// const Schema = mongoose.Schema;

// const User = new Schema({
//     username: String,
//     password: String,
// });

const User = new mongoose.Schema({
    username: String,
    password: String,
})

// Export Model
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('userData', User);
// const Userdetail = mongoose.model('userData', User);


// Userdetail.register({ username: 'test@gmail.com', active: false}, 'test');
// Userdetail.register({ username: 'test2@gmail.com', active: false }, 'test');