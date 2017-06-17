const app = require('express');
const router = app.Router();

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

router.get('/', function(req, res, next) {
    res.json(testapi);
})

module.exports = router;