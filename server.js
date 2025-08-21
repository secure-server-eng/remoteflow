const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submit-request", async (req, res) => {
  const { name, email, company, service, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "rayzarr9@gmail.com",       // 👈 Your Gmail address
      pass: "xlhj kmml govm zgxd"           // 👈 App password from Google
    }
  });

  const mailOptions = {
    from: `"RemoteFlow Request" <${email}>`,
    to: "rayzarr9@gmail.com",           // 👈 Your receiving Gmail address
    subject: "New Request from RemoteFlow",
    text: `
Full Name: ${name}
Email: ${email}
Company: ${company}
Service: ${service}
Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending email");
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
