export function mensajeEmailPayment(
  IDpayment: string,
  nombre: string,
  email: string,
  cantidad: number,
  fecha: Date,
) {
  const url = process.env.NEXT_PUBLIC_APP_URL;

  const cantidadFormateada = cantidad.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" lang="en">
  
    <head>
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    </head>
    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Mensaje de Contacto<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
    </div>
  
    <body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
      <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:100%;margin:10px auto;width:600px;border:1px solid #E5E5E5">
        <tbody>
          <tr style="width:100%">
            <td>
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
              <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="text-align:center;baground-color:#222222">
                <tbody>
                  <tr>
                    <td ><img alt="Fitvibes" height="auto" src="${url}/imgs/logomensaje.png" style="display:block;outline:none;border:none;text-decoration:none;margin:auto;border-radius:0px;baground-color:#222222;width:100%;" />
                       <p></p>
                       
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:20px 74px;text-align:center;">
                <tbody>
                  <tr>
                    <td> 
                      <p style="font-size:14px;line-height:2;margin:0;color:#747474;font-weight:500">Gracias por unirte a FITVIBES GYM.</p>
                      <p style="font-size:14px;line-height:2;margin:0;color:#747474;font-weight:500;margin-top:24px">Información de pago.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
              <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-left:40px;padding-right:40px;padding-top:22px;padding-bottom:22px">
                <tbody>
                  <tr>
                    <td>
                      <p style="font-size:18px;line-height:2;margin:0;font-weight:bold">Pago:</p>
                      <p style="font-size:14px;line-height:2;margin:0;color:#747474;font-weight:500">ID de pago: ${IDpayment}</p>
                      <p style="font-size:14px;line-height:2;margin:0;color:#747474;font-weight:500">Nombre: ${nombre}</p>
                      <p style="font-size:14px;line-height:2;margin:0;color:#747474;font-weight:500">Email: ${email}</p> 
                      <p style="font-size:14px;line-height:2;margin:0;color:#747474;font-weight:500">Cantidad: ${cantidadFormateada}</p>
                      <p style="display:flex;font-size:14px;line-height:2;margin:0;color:#747474;font-weight:500;line-height:1.2;text-align:jusify">Fecha de pago: ${fecha}</p>
                    </td>
                    
                  </tr>
                  <tr>
                    <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0;margin-top:12px" />
              <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-top:22px;padding-bottom:22px">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <p style="font-size:13px;line-height:24px;margin:0;color:#AFAFAF;text-align:center">© 2024 FitvibesGYM, Todos los derechos reservados.</p>
                          </tr>
                        </tbody>
                      
                    </td>
                  </tr>
                </tbody>
              </table>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>`;
}
