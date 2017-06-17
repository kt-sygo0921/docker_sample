const express = require('express');
const getuser = require('./api/getuser');
const app = express();


const server = app.listen(3000, function() {
    console.log("Node.js is listening to PORT:" + server.address().port);
})

app.use('/getuser', getuser);