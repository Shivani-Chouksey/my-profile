import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const mailSender = async(name, email, message) =>{
    try{

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        }) 

        let info = await transporter.sendMail({
            from:"shivanichouksey1702@gmail.com", // replace with your email
            to: email, // replace with the recipient's email
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        })

console.log("mail ",info);
        return info

    }catch(error){
        console.log("mailSender Error", error.message)
    }
}

export default mailSender