// 导入m_user.js
var M_user = require('../models/m_user');

exports.showSignin = (req, res) => {
    res.render('signin.html');
};
// 处理客户端登录请求
exports.handleSignin = (req, res) => {
    // 1. 获取表单数据
    // post提交的数据在请求体中 用body-parser并配置 使req有一个body属性 
    // 使用req.body获取表单数据
    const body = req.body;

    // 使用数据库操作的结果 
    // 使用M_user中的方法
    M_user.checkEmail(body.email, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                msg: '服务端出现错误'
            });
        }
        // 这个data是数组 有一条数据 或者 没有(即不存在email)
        if (data.length === 0) {
            return res.send({
                code: 1,
                msg: '邮箱还不存在哟'
            });
        }
        // 3. 代码走到这里表示 email一定存在 此时开始验证密码
        if (data[0].password !== body.password) {
            return res.send({
                code: 2,
                msg: '密码不正确'
            });
        }

        // 4. 邮箱 密码都正确 则返回一个200的状态
        return res.send({
            code: 200,
            msg: '登录成功'
        });
    });
}