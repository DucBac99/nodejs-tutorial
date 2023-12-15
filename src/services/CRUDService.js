const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * From Users');
    return results;

}

module.exports = {getAllUsers}