import nodemailer from 'nodemailer';

export async function post({ request }) {
  try {
    // 解析请求体中的数据
    const data = await request.json();
    const { firstName, lastName, email, phoneNumber, details } = data;

    // 检查是否所有必需的数据都存在
    if (!firstName || !lastName || !email || !phoneNumber || !details) {
      return new Response(JSON.stringify({ success: false, error: 'All fields are required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
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
      from: `"Your Website" <${process.env.SMTP_USER}>`, // 发件人
      to: 'sales@recyclemachine.net', // 收件人
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission from:
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Details: ${details}`,
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);

    // 返回成功响应
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}