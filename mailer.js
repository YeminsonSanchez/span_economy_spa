const nodemailer = require("nodemailer");

function enviar(to, subject, html) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "", // email
        pass: "", // password"
      },
    });
    const mailOptions = {
      from: "", // email
      to,
      subject,
      html,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) reject(err);
      if (data) resolve(data);
    });
  });
}

module.exports = enviar;
