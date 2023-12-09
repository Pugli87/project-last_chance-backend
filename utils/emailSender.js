// utils/emailSender.js
const fs = require("fs").promises;
const path = require("path");
const { transporter } = require("./nodemailer");

const sendVerificationEmail = async (user) => {
  const now = new Date();
  const fecha = now.toISOString().split("T")[0];
  const hora = now.toLocaleTimeString();

  const htmlTemplate = (
    await fs.readFile(path.join(__dirname, "../static/html/verifyUser.html"))
  ).toString();

  const filledHtml = htmlTemplate
    .replace("{{NameUser}}", user.name)
    .replace("{{emailUser}}", user.email)
    .replace("{{DateUsers}}", `${fecha} ${hora}`);

  const info = await transporter.sendMail({
    from: `'"🖥️No_Reply 👻💻" <${user.EMAIL_SEND}>'`,
    to: "codekapp5+No_Reply1@gmail.com, codekapp5+No_Reply2@gmail.com",
    subject: "👋🏻Hello, Verify successfully ✔",
    text: "Welcome, you can now enter",
    html: filledHtml,
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = { sendVerificationEmail };
