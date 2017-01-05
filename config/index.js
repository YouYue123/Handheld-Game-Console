const axios = require('axios')
const cfenv = require('cfenv')
axios.defaults.baseURL = "http://localhost:"+cfenv.getAppEnv().port
module.exports = axios
