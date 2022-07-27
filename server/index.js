const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express()


app.get('/', function(res,req){
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005 //PORT is for heroku and 4005 is for local

app.listen(port, () => {console.log(`Listening on port ${port}`)})