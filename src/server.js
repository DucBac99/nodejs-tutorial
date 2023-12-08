const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()   //app express
const port = process.env.PORT || 8888   // khai báo port
const hostname = process.env.HOST_NAME


//config template engines
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ejs', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})