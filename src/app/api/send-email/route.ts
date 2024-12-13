import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// send mail
const sendEmail = async (to: string, txt: string) => {

  console.log('====================================');
  console.log(txt);
  console.log('====================================');

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const res = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: "Hello",
      html: ` 
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family: Arial, Helvetica, sans-serif; background-color: white;">
    <tr>
      <td align="center" bgcolor="black" style="padding-bottom: 20px;">
        <img src="https://fitvibesgym.com/imgs/logo.png" alt="bg-class" width="150" height="150" style="display: block; margin: 0 auto;">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="color: lightgrey; font-size: 16px;">FITVIBES</td>
            <td style="color: white; font-size: 16px;">GYM</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center" style="font-size: 64px; font-weight: 800; font-style: italic; line-height: 75%;">
              CONFIRMACIÓN<br>DE <span style="color:#c60384;">LUGAR</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding: 0 60px; font-size: 32px; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
        <p>Nos complace informarte que tu lugar para la clase de Indoor Cycling ha sido reservado correctamente.</p>
        <p>Aquí tienes los detalles de tu reserva:</p>
        <p><strong style="color:#c60384; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 36px;">CLASE:</strong> Indoor Cycling</p>
        <p><strong style="color:#c60384; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 36px;">FECHA:</strong> [Fecha]</p>
        <p><strong style="color:#c60384; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 36px;">HORA:</strong> [Hora]</p>
        <p><strong style="color:#c60384; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 36px;">BICICLETA:</strong> [Número]</p>
        <p><strong style="color:#c60384; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 36px;">COACH:</strong> [Nombre del Coach]</p>
        <p><strong style="color:#c60384; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 36px;">UBICACIÓN:</strong> Salón de Cycling, Fit Vibes Gym</p>
        <p style="margin-top: 40px;">***Te recordamos que debes llegar con 10 minutos de anticipación, si tienes alguna pregunta o necesitas hacer algún cambio, no dudes en contactarnos.</p>
        <p>Nos vemos en la clase, <strong>¡A pedalear fuerte!</strong></p>
      </td>
    </tr>
  </table>
            `,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
