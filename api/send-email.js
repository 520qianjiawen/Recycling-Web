const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    // 创建 Nodemailer 传输器配置，用于连接 Hostinger 的 SMTP 服务器
    let transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // Hostinger SMTP 服务器地址
      port: 461, // SMTP 端口，通常为 587 或 465
      secure: true, // 如果端口为 465，设为 true；否则为 false
      auth: {
        user: process.env.HOSTINGER_EMAIL, // 使用环境变量来存储你的 Hostinger 邮箱账户
        pass: process.env.HOSTINGER_EMAIL_PASSWORD // 使用环境变量来存储你的邮箱密码
      }
    });

    // 设置邮件内容
    const mailOptions = {
      from: process.env.HOSTINGER_EMAIL, // 发件人地址也使用环境变量
      to: 'sales@rumtoo.com', // 收件人地址
      subject: '新的表单提交', // 邮件主题
      text: `收到来自姓名: ${req.body.firstName} 的表单提交` // 邮件正文
    };

    // 发送邮件
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        res.status(500).send("邮件发送失败");
      } else {
        console.log('邮件发送成功: ' + info.response);
        res.status(200).send("邮件已发送");
      }
    });
  } else {
    res.status(405).send('只接受 POST 请求');
  }
};
