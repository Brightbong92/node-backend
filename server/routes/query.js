var express = require('express');
var router = express.Router();

var promise = require('bluebird');
var pgp = require('pg-promise')({promiseLib: promise});

var conString = "postgres://bjCentr:bjc2020@35.238.16.143:5432/bjdb";

var db = pgp(conString);

router.get('/', function(req, res) {
        db.any(`SELECT * FROM TB_SAMPLE`)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        })
})


module.exports = router;