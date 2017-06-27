// Requirements
const express = require('express')
const path = require('path')
const router = express.Router() // Express Router for routing


// Require lib.js
const lib = require('../lib/lib.js') 


//Define static path for index.html
router.use('/', express.static(path.join(__dirname,'../public')))


// Routes definition
// router.route('/s/:query/offset=:n').get(lib.query)
// router.route('/imagesearch/').get(lib.imageSearch)

//Module exports of the express.Router()
module.exports = router

