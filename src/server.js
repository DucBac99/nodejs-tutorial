require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const mysql = require('mysql2');

const app = express()   //app express
const port = process.env.PORT || 8888   // khai báo port
const hostname = process.env.HOST_NAME

//config template engines
configViewEngine(app)

//khai baso route
app.use('/', webRoute)

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit'
});

connection.query(
    'select * from Users u',
    function(err, results, fields) {
      console.log(">>>>results: ",results); // results contains rows returned by server
      console.log(">>>>fields: ",fields); // fields contains extra meta data about results, if available
    }
  );

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})