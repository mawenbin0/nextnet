var express = require('express');
var db = require('../db');
var router = express.Router();



/* router.get('/', function(req, res, next) {
  let inform = req.query;
  let username = inform.newusername;
  let password = inform.newpassword;
  let result = "恭喜你注册成功了，你的用户名:" + username + "\n" + "你的密码是："+ password;
  res.send(result)
});  */
/* router.post('/', function(req, res, next) {
  let inform = req.body.params;
  console.log(inform)
  let username = inform.newusername;
  let password = inform.newpassword;
  let newuserSQL = 'insert INTO users(user_name,user_password)' +' values('+'"'+username+'"'+','+'"'+password+'"'+")";
  let conn=db.connection();
  db.insert(conn,newuserSQL,'',function(res){
    console.log(res)
  })
  db.close(conn);
  
  }); */

router.get('/', function (req, res, next) {
  let inform = req.query;
  let username = inform.newusername;
  let password = inform.newpassword;
  let result = "恭喜你注册成功了，你的用户名:" + username + "\n" + "你的密码是：" + password;
  res.send(result)
})

router.get('/check', function (req, res, next) {
  let inform = req.query;
  let username = inform.newusername;
  let query3SQL = "select * from emp";
  let conn = db.connection();
  db.query3(conn, query3SQL, "", function (resx) {
    let flag = 0;
    for (let i = 0; i < resx.length; i++) {
      let existUsername = resx[i].empno;
      if (username == existUsername) {
        flag = 1;
        break;
      }
    }
    if (flag == 1) {
      res.send({
        state: "fail",
        message: "用户名已存在"
      })
    } else {
      res.send({
        state: "success",
        message: "用户名可以使用"
      })
    }
  })
  db.close(conn);
})

module.exports = router;
