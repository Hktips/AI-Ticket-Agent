import nodemailer from 'nodemailer';
export const sendMail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_SMTP_HOST,
      port: process.env.MAILTRAP_SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_SMTP_USER,
        pass: process.env.MAILTRAP_SMTP_PASS,
      },
    });
    const info= await transporter.sendMail({
      from: "Inngrest TMS",
      to, 
      subject,
      text, 
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
