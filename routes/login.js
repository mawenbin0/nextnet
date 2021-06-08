let express = require('express');
let router = express.Router();

router.post('/', function (req, res, next) {
  let inform = req.body.params;
  let password = inform.newpassword;
  let username = inform.newusername;
  let result = "恭喜你注册成功了，你的用户名:" + username + "\n" + "你的密码是：" + password;
  res.send(result)

});

module.exports = router;