import nodemailer from 'nodemailer'
import { configDotenv } from 'dotenv'
configDotenv()

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail as the email service
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail email address
    pass: process.env.EMAIL_PASS // Your Gmail app password
  }
})

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const verificationUrl = `http://localhost:3000/api/verify-email?token=${verificationToken}`
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Verify Your Email',
      html: `<p>Click <a href="${verificationUrl}">here</a> to verify your email.</p>`
    }
    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
  }
}

