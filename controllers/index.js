'use strict'
const express = require('express')
const router = express.Router()
const path = require('path')
router.get('/vue',(req,res) => {
  res.send('Hello Vue')
})

module.exports = router
