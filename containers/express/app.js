const express = require('express');
const app = express();

const server = app.listen(3000, function() {
    console.log("Node.js is listening to PORT:" + server.address().port);
})

var testapi = [{
        id: '001',
        name: 'kato',
        age: '26'
    },
    {
        id: '002',
        name: 'hoge',
        age: '27'
    }
]

app.get('/getuser', function(req, res, next) {
    res.json(testapi);
})