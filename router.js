// 路由模块
// 1. 导包
const express = require('express');
// 导入文件
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');

// 2. 实例化router对象
const router = express.Router();

// 3. 配置路由 找方法
router.get('/signin', c_user.showSignin)
      .post('/signin', c_user.handleSignin)
      .get('/', c_topic.showTopic);

// 4. 导出路由对象
module.exports = router;