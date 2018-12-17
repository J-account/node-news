// 把c_user中 数据库操作部分  单独提取出来

// 导入数据库配置模块db_config.js
const connection = require('../config/db_config');
// 验证邮箱密码
exports.checkEmail = (email, callback) => {
    //   callback 是形参
    // 2. 先验证邮箱: 
    const sqlstr = 'select * from `users` where email=?';
    connection.query(sqlstr, email, (err, data) => {
        if (err) {
            // err, data callback是形参 
            callback(err, null);
        } else {
            callback(null, data);
        }
    })
}
