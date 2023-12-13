const connection = require('../config/database')

const getHomepage = (req, res) => {
    let users = [];
    connection.query(
        'select * from Users u',
        function(err, results, fields) {
            users = results;
            console.log(">>>>results: ",results); // results contains rows returned by server
            res.send(JSON.stringify(users));
        }
    );
}

const ejs = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    ejs
}