const getHomepage = (req, res) => {
    res.send('Hello World!')
}

const ejs = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    ejs
}