const mongoUrl = 'mongodb://localhost:27017/myproject';
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

class Mongo {
  constructor() {
    MongoClient.connect(mongoUrl, (err, db) => {
      this.db = db;
      assert.equal(null, err);
      console.log("Connected successfully to server");
    })
  }

  registry(user, callback) {
    const collection = this.db.collection('users');
    collection.findOne({login: user.login}, (err, result) => {
      if (result) {
        callback({error: 'user already exist'});
        return;
      }
      collection.insertOne(user, function (err, result) {
        console.log("user registrated");
        callback(result);
      });
    });
  }

  login(user, callback, onError) {
    const collection = this.db.collection('users');
    collection.findOne({login: user.login, password: user.password}, (err, result) => {
      if (result) {
        callback({error: 'user already exist'});
        return;
      }
      onError()
    });
  }
  addResult(user, callback) {
    const collection = this.db.collection('users');
    collection.updateOne({login: user.login, password: user.password},{'$set': {'testTime': user.testTime}})
    // TODO create update
  }
}


module.exports.Mongo = Mongo;
