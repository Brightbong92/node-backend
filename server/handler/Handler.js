const { response } = require('express');
const Model = require('../model/Model.js');

class Handler {
    constructor() {
        this.model = new Model();
    }

    readAll(req, res) {
        this.model.readAll()
        .then(function(data) {
            res.send(JSON.stringify(data));
        })
        .catch(function(error) {
            res.send(JSON.stringify({msg: error}));
        });
    }
}

module.exports = Handler;