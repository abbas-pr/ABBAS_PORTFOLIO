const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(req.body);
    console.log( "email:",process.env.GMAIL_USER);
    console.log( "password:",process.env.GMAIL_APP_PASSWORD);

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Please fill in all fields.",
      });
    }

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact - ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to send message.",
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});