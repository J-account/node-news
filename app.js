// 是项目的入口文件
// 1. 导包
const express = require('express');
// 导入路由对象
const router = require('./router');

// 2. 配置
const app = express();

// 3. 使用路由
app.use(router);

// 4. 监听端口
app.listen(7000, () => {
    console.log('it is running------');
})