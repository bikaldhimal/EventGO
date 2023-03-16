const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "EventGO <bikaldhimal2016@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //   asquvhysyldnuuag -> Google App code for bikaldhimal2016@gmail.com

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
