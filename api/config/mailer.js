const nodemailer = require("nodemailer");

module.exports.mailer = (email, subject, html) => {
  const transporter = nodemailer.createTransport({
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    host: process.env.NODEMAILER_HOST,
    // tls: {
    //   ciphers: "SSLv3"
    // },
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: subject,
    html: html
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent");
    }
  });
};
