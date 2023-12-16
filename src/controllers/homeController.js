const connection = require('../config/database')
const {getAllUsers, getUserById, updateUserById, deleteUserByID} = require('../services/CRUDService')

const getHomepage = async (req, res) => {
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

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', {userEdit: user})
}

const postUpdateUser = async (req, res) => {
    console.log(">>>req.body: ", req.body)
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let userId = req.body.userId


    await updateUserById(email, name, city, userId);
    res.redirect('/')


}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs',{userEdit: user})

}

const postHandleRemoveUser = async (req, res) => {
    let userId = req.body.userId;
    await deleteUserByID(userId);
    res.redirect('/')
}
module.exports = {
    getHomepage,
    ejs,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}