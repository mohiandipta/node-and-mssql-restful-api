const express = require('express')
const router = express.Router()


router.get(`/userget`, (req, res) => {
    try {
        res.json({
            users: [
                {
                    id: 1,
                    name: 'Mohian',
                    age: 23,
                    company: 'Akij',
                    salary: '20,000'
                },
                {
                    id: 2,
                    name: 'Dip',
                    age: 17,
                    company: 'Student',
                    salary: 'N/A'
                }
            ]
        })
    }
    catch (error) {
        res.status(500).res.send(error.message)
    }
})


router.post(`/profilepost`, (req, res) => {
    try {
        username = req.body.username
        age = req.body.age
        console.log(
            username,
            age)
        res.send()
    }
    catch (error) {
        res.status(500).res.send(error.message)
    }
})

module.exports = router;