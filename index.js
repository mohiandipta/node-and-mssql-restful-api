const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
})
app.use(bodyParser.urlencoded({ extended: true }));
const ProfileData = require('./controller/profile')

app.use('/', ProfileData)
app.listen(8000, () => {
    console.log('Server is running....')
})