import nodemailer from 'nodemailer';

export async function POST({ request }) {
  try {
    // 解析表单数据
    const formData = await request.formData();
    const firstName = formData.get('firstname');
    const lastName = formData.get('lastname');
    const email = formData.get('email');
    const phoneNumber = formData.get('phone');
    const details = formData.get('details');

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
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/success' // 替换为您的成功页面URL
      },
    });

  } catch (error) {
    console.error('Error sending email:', error);
    // 重定向到错误页面
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/error' // 替换为您的错误页面URL
      },
    });
  }
}