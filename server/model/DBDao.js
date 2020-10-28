const { join } = require('bluebird');

const PgPromise = require('pg-promise')();

class DBDao {
    
    constructor() {
        this.db = PgPromise('postgres://bjCentr:bjc2020@35.238.16.143:5432/bjdb');
    }

    readAll() {
        return this.db.any('SELECT * FROM TB_SAMPLE');
    }

    insert(joinInfo) {
        let email = joinInfo.email;
        let pwd = joinInfo.pwd;
        let nick = joinInfo.nick;
        let phone = joinInfo.phone;
        return this.db.any('INSERT INTO TB_SAMPLE (EMAIL, PWD, NICK, PHONE) VALUES ($1, $2, $3, $4)', [email, pwd, nick, phone]);
    }

    emailCheck(joinInfo) {
        let email = joinInfo.email;
        return this.db.any('SELECT COUNT(*) FROM TB_SAMPLE WHERE EMAIL = $1', [email]);
    }

    nickCheck(joinInfo) {
        let nick = joinInfo.nick;
        return this.db.any('SELECT COUNT(*) FROM TB_SAMPLE WHERE NICK = $1', [nick]);
    }

    


}

module.exports = DBDao;