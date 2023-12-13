require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const connection = require('./config/database');

const app = express()   //app express
const port = process.env.PORT || 8888   // khai báo port
const hostname = process.env.HOST_NAME

//config template engines
configViewEngine(app)

//khai baso route
app.use('/', webRoute)



connection.query(
    'select * from Users u',
    function(err, results, fields) {
      console.log(">>>>results: ",results); // results contains rows returned by server
      // console.log(">>>>fields: ",fields); // fields contains extra meta data about results, if available
    }
  );

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})