const express = require('express')
const router = express.Router()
const { poolPromise } = require('./connection/DB')
const sql = require('mssql')


router.get(`/ApiProfileGet`, async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request().query('select * from tblProfile', (err, profileset) => {
            if (err) {
                console.log(err)
            }
            else {
                let send_data = profileset.recordset
                res.json(send_data)
            }
        })
    } catch (error) {
        res.status(500).res.send(error.message)
    }
})

module.exports = router;