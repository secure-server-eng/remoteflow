const nodemailer = require("nodemailer");

async function sendEmail(data, pdfBuffer) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-password"
    }
  });

  const htmlContent = `
    <div style="font-family:Arial, sans-serif; padding:20px;">
      <img src="https://yourdomain.com/logo.png" alt="RemoteFlow Logo" style="height:40px; margin-bottom:10px;">
      <h2 style="color:#007bff;">RemoteFlow Has Received a New Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    </div>
  `;

  await transporter.sendMail({
    from: '"RemoteFlow" <tasksbychichi@gmail.com>',
    to: "rayzarr9@gmail.com",
    subject: "New Request Received",
    html: htmlContent,
    attachments: [{
      filename: "request-summary.pdf",
      content: pdfBuffer
    }]
  });
}

module.exports = { sendEmail };
