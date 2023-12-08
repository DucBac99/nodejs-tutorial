require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');

const app = express()   //app express
const port = process.env.PORT || 8888   // khai báo port
const hostname = process.env.HOST_NAME

//config template engines
configViewEngine(app)

//khai baso route
app.use('/', webRoute)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})