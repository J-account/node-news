// 是项目的入口文件
// 1. 导包
const express = require('express');
const bodyParser = require('body-parser');
// 导入路由对象
const router = require('./router');

// 2. 配置
const app = express();
// 配置静态资源
app.use('/public', express.static('./public'));
// 配置第三方资源
app.use('/node_modules', express.static('./node_modules'));

app.engine('html', require('express-art-template'));
// 配置body-parser 使每一个req有一个body属性 从而可以获取表单值
app.use(bodyParser.urlencoded({ extended: false }));
// 3. 使用路由
app.use(router);

// 4. 监听端口
app.listen(7000, () => {
    console.log('it is running------');
})