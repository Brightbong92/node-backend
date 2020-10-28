var express = require('express');
var router = express.Router();

var promise = require('bluebird');
var pgp = require('pg-promise')({promiseLib: promise});
const connectionInfo = require('../db/connectionInfo.js')
var conn = connectionInfo.dbInfo;
var db = pgp(conn);

const bcrypt = require('bcrypt')
const saltRounds = 10;

router.post('/', async (req, res) => {
    //console.log(req.body);
    let email = req.body.joinInfo.email;
    let pwd = req.body.joinInfo.pwd;

    
    await db.one(`SELECT NUM, EMAIL, PWD, NICK, PHONE FROM TB_SAMPLE WHERE EMAIL = $1`, [email])
        .then(data => {
            console.log(data);
            if(bcrypt.compareSync(pwd, data.pwd)) {
                let loginUser = {
                    num: data.num,
                    email: data.email,
                    pwd: '',
                    nick: data.nick,
                    phone: data.phone
                };
                res.send({code: '200', message: {loginUser: loginUser}})
            }else {
                res.send({code: '403', message: '잘못된 아이디나 비밀번호입니다.'});
            }
        })
        .catch(error => {
            console.log(error);
            res.send({code: '403', message: '잘못된 아이디나 비밀번호입니다.'});
        })
    

})

module.exports = router;