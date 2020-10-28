const { response } = require('express');
const DBDao = require('../model/DBDao.js');

class AsyncHandler {
    constructor() {
        this.dao = new DBDao();
    }

    readAll(req, res) {
        this.dao.readAll()
        .then(function(data) {
            res.send(JSON.stringify(data));
        })
        .catch(function(error) {
            res.send(JSON.stringify({msg: error}));
        });
    }

    emailCheck(req, res) {

        let joinInfo = req.body.joinInfo;

        this.dao.emailCheck(joinInfo)
        .then(data=> {

            console.log('emailCheck: ' + data);

            res.send(JSON.stringify(data));
        })
        .catch(err => {
            res.send(JSON.stringify({msg: error}));
        })
    }

}

module.exports = AsyncHandler;