// Express and other Requirements
const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
var upload = multer({dest: 'uploads/'})


// Route Definitions
app.use('/', express.static(path.join(__dirname,'public')))

app.post('/upload/', upload.single(), function(req,res,next) {
    
})


//Server Listening and Port Definition
const port = process.env.PORT | 8080;
app.listen(port,()=>{
    console.log('Server listening on port: ' + port)
})