// utils/emailSender.js
const fs = require("fs").promises;
const path = require("path");
const { transporter } = require("./nodemailer");
const { PORT, EMAIL_SEND } = require("./variables");

// confirmacion
const sendVerificationEmail = async (user) => {
  const { name, email } = user;

  const now = new Date();
  const fecha = now.toISOString().split("T")[0];
  const hora = now.toLocaleTimeString();

  // html
  const htmlTemplate = (
    await fs.readFile(path.join(__dirname, "../static/html/verifyUser.html"))
  ).toString();

  // BD
  const filledHtml = htmlTemplate
    .replace("{{NameUser}}", name)
    .replace("{{emailUser}}", email)
    .replace("{{DateUsers}}", `${fecha} ${hora}`);

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `'"🖥️No_Reply 👻💻" <${EMAIL_SEND}>'`, // sender address
    to: `"<${email}>"`, // list of receivers
    subject: "👋🏻Hello, Verify successfully ✔", // Subject line
    text: "Welcome, you can now enter", // plain text body
    // html: "<b>Hello world?</b>", // html body
    html: filledHtml,
  });

  console.log("Message sent: %s", info.messageId);
};

// envio de correos
const confirmedActivationEmail = async (user) => {
  const { name, email } = user;

  const now = new Date();
  const fecha = now.toISOString().split("T")[0];
  const hora = now.toLocaleTimeString();

  // Construye la URL de verificación
  const verificationURL = `http://localhost:${PORT || 4000}/api/users/verify/${
    user.verificationToken
  }`;

  // HTML
  const htmlTemplate = (
    await fs.readFile(path.join(__dirname, "../static/html/welcome.html"))
  ).toString();

  // db
  const filledHtml = htmlTemplate
    .replace("{{NameUser}}", name)
    .replace("{{emailUser}}", email)
    .replace("{{DateUsers}}", `${fecha} ${hora}`)
    .replace("{{verifyUser}}", verificationURL);

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `'"🖥️No_Reply 👻💻" <${EMAIL_SEND}>'`, // sender address
    to: `"<${email}>"`, // list of receivers
    subject: "👋🏻Hello, Confirmation email resend ✔", // Subject line
    text: "Welcome, registration completed, Confirmation email resend", // plain text body
    // html: "<b>Hello world?</b>", // html body
    html: filledHtml,
  });

  console.log("Message sent: %s", info.messageId);
};

const sendVerificationEmailHTML = async (user) => {
  const { name, email } = user;

  const now = new Date();
  const fecha = now.toISOString().split("T")[0];
  const hora = now.toLocaleTimeString();

  // html
  const htmlTemplate = (
    await fs.readFile(path.join(__dirname, "../static/html/verifyUser.html"))
  ).toString();

  // BD
  const filledHtml = htmlTemplate
    .replace("{{NameUser}}", name)
    .replace("{{emailUser}}", email)
    .replace("{{DateUsers}}", `${fecha} ${hora}`);

  // Configura la respuesta para enviar el archivo HTML
  // res.setHeader("Content-Type", "text/html");
  // res = filledHtml;

  // console.log("Message sent: %s", filledHtml);
  return filledHtml;
};

module.exports = {
  sendVerificationEmail,
  confirmedActivationEmail,
  sendVerificationEmailHTML,
};
