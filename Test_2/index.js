const express = require('express')
const { randomBytes } = require('crypto')
const app = express()

const port = 8000;

app.use(express.json())

const peepBySquawkId = {}

app.post(`/test_2`, (req, res) => {
    const peepId = randomBytes(8).toString('hex')
    const { peep } = req.body
    const peeps = peepBySquawkId[req.params.id] || [];
    peeps.push({ id: peepId, peep })
    peepBySquawkId[req.params.id] = peeps
    res.status(501).send(peeps)
})

app.get(`/api/`, (req, res) => {
    res.send("This is test")
})


app.listen(port, () => {
    console.log('Server is running at port : ' + port)
})