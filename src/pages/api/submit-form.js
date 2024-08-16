import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // 解析表单数据
      const formData = await req.body; // 使用 req.body 获取表单数据
      const firstName = formData.firstname;
      const lastName = formData.lastname;
      const email = formData.email;
      const phoneNumber = formData.phone;
      const details = formData.details;

      // 检查是否所有必需的数据都存在
      if (!firstName || !lastName || !email || !phoneNumber || !details) {
        return res.status(400).json({ success: false, error: 'All fields are required' });
      }

      // 配置邮件传输服务
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // 定义邮件选项
      const mailOptions = {
        from: `"Your Website" <${process.env.SMTP_USER}>`,
        to: 'sales@recyclemachine.net',
        subject: 'New Contact Form Submission',
        text: `You have a new contact form submission from:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Details: ${details}`,
      };

      // 发送邮件
      await transporter.sendMail(mailOptions);

      // 重定向到成功页面
      return res.redirect(302, '/success'); 

    } catch (error) {
      console.error('Error sending email:', error);
      // 重定向到错误页面
      return res.redirect(302, '/error'); 
    }
  } else {
    // 处理其他请求方法，例如返回 405 Method Not Allowed
    return res.status(405).end();
  }
}