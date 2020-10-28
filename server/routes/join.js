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
    //console.log(req.body.joinInfo);
    let email = req.body.joinInfo.email;
    let pwd = req.body.joinInfo.pwd;
    let nick = req.body.joinInfo.nick;
    let phone = req.body.joinInfo.phone;

    let emailCheck = await db.one('SELECT COUNT(*) FROM TB_SAMPLE WHERE EMAIL = $1', [email])
                            .then(data => {
                                if(data.count != 0) {
                                    res.send({code: "403" , message : '중복되는 이메일입니다.'}).end();
                                    return true;
                                }
                            })
                            .catch(err => {
                                console.log("이메일 체크에러: " + err);
                                res.send({code: "500" , message : '서버에러입니다.'}).end();
                                return true;
                            })
    
    if(emailCheck) return;

    let nickCheck = await db.one(`SELECT COUNT(*) FROM TB_SAMPLE WHERE NICK = $1`, [nick])
                            .then(data => {
                                if(data.count != 0) {
                                    res.send({code: "403" , message : '중복되는 닉네임입니다.'}).end();
                                    return true;
                                }
                            })
                            .catch(err => {
                                console.log("닉네임 체크에러: " + err);
                                res.send({code: "500" , message : '서버에러입니다.'}).end();
                                return true;
                            })

    if(nickCheck) return;

    let num = await db.one(`SELECT COUNT('NUM') + 1 AS NUM FROM TB_SAMPLE`)
                        .then(data => {
                            return data.num;
                        })
                        .catch(err => {
                            console.log(err);
                        })
    

    pwd = bcrypt.hashSync(pwd, saltRounds);

    let joinProcess = await db.any('INSERT INTO TB_SAMPLE (NUM, EMAIL, PWD, NICK, PHONE, REG_DATE) VALUES ($1, $2, $3, $4, $5, NOW())', [num, email, pwd, nick, phone])
                        .then(data => {
                           res.send({code: '200', message: '회원가입을 완료했습니다.'})
                           return true; 
                        })
                        .catch(err=> {
                            console.log("insert에러: "+err);
                            res.send({code: "500" , message : '서버에러입니다.'}).end();
                            return true;
                        })
    
    if(joinProcess) return;
    

});



module.exports = router;
