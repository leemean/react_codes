const express = require('express')
const router = express.Router()


router.get("/",(req,res) => {
    res.send({
        msg: 'hello122'
    })
})

module.exports = router