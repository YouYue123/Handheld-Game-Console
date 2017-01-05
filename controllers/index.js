'use strict'
const express = require('express')
const router = express.Router()
const path = require('path')
router.get('/vue',(req,res) => {
  res.sendFile(path.resolve(__dirname + '/../vue-client/index.html'))
})

module.exports = router
