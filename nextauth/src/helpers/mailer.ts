import User from "@/models/userModel";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);


    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        },
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        },
      });
    }
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "5dff952fb896fe",
        pass: "****6a58",
      },
    });

    const urlPath = emailType === "VERIFY" ? "verifyemail" : "resetpassword";
    const subject =
      emailType === "VERIFY" ? "Verify your email" : "Reset your password";
    const actionText =
      emailType === "VERIFY" ? "verify your email" : "reset your password";

    const mailOptions = {
      from: "aazimsadan99@gmail.com",
      to: email,
      subject: subject,
      html: `<p>Click <a href="${process.env.DOMAIN}/${urlPath}?token=${hashedToken}">here </a> to ${actionText}
      or copy and paste the link below in your browser.
      <br> ${process.env.DOMAIN}/${urlPath}?token=${hashedToken}
      </p>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
