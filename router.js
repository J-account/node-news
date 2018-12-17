// 路由模块
// 1. 导包
const express = require('express');
// 导入
const c_user = require('./controllers/c_user');


// 2. 实例化router对象
const router = express.Router();

// 3. 配置路由 找方法
router.get('/', c_user.showSignin);

// 4. 导出路由对象
module.exports = router;