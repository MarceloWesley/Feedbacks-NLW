import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c4b0a8422ca8eb",
    pass: "68d9df45a9883c"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
 async sendMail({subject, body}: SendMailData){
  await transport.sendMail({
    from: "Equipe Feedget <test@feedget.com>",
    to: 'Marcelo Wesley <marcelo_oliscott@hotmail.com>',
    subject,
    html: body
     
  })
 }
}