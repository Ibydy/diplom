const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoDB  = require('./Mongo').Mongo;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const mongoDB = new MongoDB();


app.post('/registration', (req,res) => mongoDB.registry(req.body,(response) => res.send(response)));
app.get('/closeDB', (req, res) => {
  db.close();
  res.send('connection closed');
});

app.listen(3001);
console.log('Listening on port 3001...');





