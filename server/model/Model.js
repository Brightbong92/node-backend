const PgPromise = require('pg-promise')();

class Model {
    
    constructor() {
        this.db = PgPromise('postgres://bjCentr:bjc2020@35.238.16.143:5432/bjdb');
    }

    readAll() {
        return this.db.any('SELECT * FROM TB_SAMPLE');
    }
}

module.exports = Model;