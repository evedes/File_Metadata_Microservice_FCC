// Express and other Requirements
const express = require('express')
const app = express()
const port = process.env.PORT | 8080;
const route = require('./routes/routes.js')


// use routes.js file for routing
app.use('/', route)


//Server running and listening on const port
app.listen(port,()=>{
    console.log('Server listening on port: ' + port)
})