const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/chart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});

const usersSchema = mongoose.Schema({
	      ID: Number,
          Name: String,
          Email: String,
          Gender: String,
          Status: String,

});

// const User = mongoose.model('User', usersSchema);

const User = mongoose.model('User', usersSchema);
module.exports = User;
