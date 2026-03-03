const nodemailer = require("nodemailer");

module.exports = async (req, res) => {

  if (req.method !== "POST") {
    return res.status(405).send("Only POST allowed");
  }

  const { name, Email, Subject, Message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: Subject,
      text: `
        Name: ${name}
        Email: ${Email}
        Message: ${Message}
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error sending email" });
  }
};