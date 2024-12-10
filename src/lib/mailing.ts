
import { mensajeContactoCliente } from "@/components/emails/email_mensaje_template";
import { mensajeContacto } from "@/components/emails/contacto_email_mensaje_templade";
import { transporter } from "@/config/nodemailer";
import { mensajeEmailPayment } from "@/components/emails/email_payment";

const domain = process.env.NEXTAUTH_URL;


export const sendTwoFactorTokenEmail = async (email: string, token: string) => {

  const info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Código 2FA - FitvibesGym',
    text: `<p>Hola, te hablamos desde FitvibesGym  </p><p>El código es : ${token}</p>`,
    html: `<p>Hola, te hablamos desde FitvibesGym  </p><p>El código es : ${token}</p>`
  });

  if (info.messageId) {
    return true;
  }
  return false;

}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-password?token=` + token;

  const info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Restaurar contraseña - FitvibesGym  ',
    text: `<p>Hola, te hablamos desde FitvibesGym  </p><p>Para restaurar la contraseña haz click aquí  <a href="${confirmLink}">aquí</a></p>`,
    html: `<p>Hola, te hablamos desde FitvibesGym  </p><p>Para restaurar la contraseña haz click aquí  <a href="${confirmLink}">aquí</a></p>`
  });

  if (info.messageId) {
    return true;
  }
  return false;


}


export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=` + token;

  const info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Confirma tu email - FitvibesGym  ',
    text: `<p>Hola, te hablamos desde FitvibesGym  </p><p>Para verificar tu cuenta da click <a href="${confirmLink}">aquí</a></p>`,
    html: `<p>Hola, te hablamos desde FitvibesGym  </p><p>Para verificar tu cuenta da click <a href="${confirmLink}">aquí</a></p>`
  });

  if (info.messageId) {
    return true;
  }
  return false;
}

export const sendEmailMensajeContact = async (email: string, nombre: string, telefono: string, mensaje: string) => {
  const info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    bcc: process.env.MAIL_USER,
    subject: 'FitvibesGym',
    html: mensajeContactoCliente(nombre, email, mensaje, telefono)
  });

  if (info.messageId) {
    return true;
  }
  return false;

}
export const sendEmailPayment = async (IDpayment: string, email: string, nombre: string, cantidad: number, fecha: Date) => {
  const info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    bcc: process.env.MAIL_USER,
    subject: 'FitvibesGym',
    html: mensajeEmailPayment(IDpayment, nombre, email, cantidad, fecha)
  });

  if (info.messageId) {
    return true;
  }
  return false;

}