const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { Int } = require('mssql')

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     next();
// })

let user = {
    name: "batman",
    age: "30",
    email: "batman@robin.com"
}


app.get(`/user`, (req, res) => {
    res.send(user)
})

let userInfo = {
    email: '',
    age: ''
}

app.post(`/userInfo`, (req, res) => {
    const { email, age } = req.body

})

// app.use(bodyParser.urlencoded({ extended: true }));
// const ProfileData = require('./controller/profile')

// app.use('/', ProfileData)
app.listen(8000, () => {
    console.log('Server is running....')
})