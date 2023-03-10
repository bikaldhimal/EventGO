const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: "Bikal Dhimal <bikaldhimal2016@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //   asquvhysyldnuuag -> Google App code for bikaldhimal2016@gmail.com

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
