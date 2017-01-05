'use strict'
const express = require('express')
const app = express()
const cfenv = require('cfenv')
const appEnv = cfenv.getAppEnv()
app.use(require('./controllers'))
app.use('/vue',express.static('vue-client'))
app.use('/react',express.static('react-client'))
app.use('/angular2',express.static('angular2-client'))
app.listen(appEnv.port,()=>{
  console.log('Server start at port ' + appEnv.port)
})
