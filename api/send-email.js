import express from 'express';
import nodemailer from 'nodemailer';

// 配置发件服务器
let transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'cavon@recycling.top',
    pass: '912..Cavon',
  },
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 处理表单提交并发送邮件
app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, phone, details } = req.body;

  let mailOptions = {
    from: '"Company Name" <cavon@recycling.top>',
    to: email,
    subject: 'Thank you for contacting us',
    text: `Dear ${firstName} ${lastName},\n\nThank you for your inquiry. We have received the following details:\n\n${details}\n\nWe will get back to you shortly.\n\nBest regards,\nCompany Name`,
    html: `<p>Dear ${firstName} ${lastName},</p><p>Thank you for your inquiry. We have received the following details:</p><p><b>${details}</b></p><p>We will get back to you shortly.</p><p>Best regards,<br>Company Name</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error occurred: ' + error.message);
    }
    res.status(200).send('Message sent: ' + info.messageId);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});