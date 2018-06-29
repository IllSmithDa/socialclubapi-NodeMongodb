const express = require('express');
//const mysql = require('mysql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const routes = require('./routes/routes');
const dotenv = require('dotenv').config();
const server = express();
const port = 3030;

server.use(bodyParser.json());

/* test code for AWS 
const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  connectTimeout: 99999999,
})

connection.connect((err) => {
  if (err) {
    console.log('Database connection has failed:' + err.stack);
    return
  };
  console.log('Database connection sucessfully established');
})
*/

mongoose.Promise = global.Promise;
mongoose
.connect(process.env.MONGOLAB_KEY)
// .connect("mongodb://localhost:27017/loanie")
.then(function(db) {
  console.log("Database connected successfully to Mongolab");
  server.listen(port, function() {
    console.log("server running on port " + port);
  });
})
.catch(function(err) {
  console.log("DB connection failed..", err.message);
});

routes(server);