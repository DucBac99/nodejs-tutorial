const express = require('express')
const path = require('path')
const app = express()   //app express
const port = 3000     // khai báo port

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