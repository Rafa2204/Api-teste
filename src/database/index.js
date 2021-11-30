const mongoose = require('mongoose');

class Database {
  constructor() {
    this.mongo()
  }

  mongo() {
    this.mongoConnection = mongoose.connect("mongodb+srv://admin:kB1UU9DVwuGSjQUB@cluster0.z7h6v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true
    }, (err) => {
       (!err) ? console.log('MongoDB has connected successfully.') : console.log(err) ;
    }
       );
  }
}

module.exports = new Database() 