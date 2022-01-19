const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { status } = require('express/lib/response');
const router = express.Router()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// routes
const profile = require('./controller/profile')

app.use(`/test`, profile)



// app.use('/', ProfileData)
app.listen(8000, () => {
    console.log('Server is running....')
})