import nodemailer from 'nodemailer';

export async function post({ request }) {
  const data = await request.json();

  const { firstName, lastName, email, phoneNumber, details } = data;

  // 配置邮件传输服务
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // 使用你的SMTP服务器
    port: 465,
    secure: true,
    auth: {
      user: 'cavon@recycling.top', // 你的邮箱地址
      pass: '912..Cavon', // 你的邮箱密码
    },
  });

  // 定义邮件选项
  const mailOptions = {
    from: '"Your Website" <cavon@recycling.top>', // 发件人
    to: 'sales@recyclemachine.net', // 收件人
    subject: 'New Contact Form Submission',
    text: `You have a new contact form submission from:
    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone Number: ${phoneNumber}
    Details: ${details}`,
  };

  // 发送邮件
  try {
    await transporter.sendMail(mailOptions);
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