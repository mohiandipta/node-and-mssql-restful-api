const express = require('express')
const router = express.Router()
const Profile = require('../controller/profile')

router.get(`/profile`, Profile)
router.post(`/profile`, Profile)

module.exports = router;