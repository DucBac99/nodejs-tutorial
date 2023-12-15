const connection = require('../config/database')
const {getAllUsers} = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    // console.log('>>>Check row: ', results);
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results})
}

const ejs = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    console.log(">>>req.body: ", req.body)
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function(err, results) {
    //         // console.log(results);
    //         res.send('create user success')
    //     }
    // );

    let [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]);
    console.log(">>>result: ", results)
    res.send('create user success')


}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage,
    ejs,
    postCreateUser,
    getCreatePage
}