export default async function Home() {
  return (
    <section className=" w-full flex flex-col bg-slate-50 min-h-screen justify-center items-center pb-24">
      
      <div className="w-full container p-5   rounded-lg mt-[100px] text-xl [&>ol]:ml-8  ">
        <h1 className="text-3xl font-bold text-center mb-8">
          Política de Privacidad
        </h1>
        <p className="text-justify mb-8">
          Esta Política de Privacidad describe cómo Fit Vibes Gym recopila,
          utiliza y protege la información personal que usted proporciona cuando
          utiliza nuestros servicios. Nos comprometemos a proteger su privacidad
          y mantener la confidencialidad de su información personal.
        </p>
        <h2 className="text-2xl font-bold">Información que recopilamos.</h2>
        <p className="text-justify mb-8">
          Podemos recopilar la siguiente información personal cuando utiliza
          nuestros servicios:
        </p>
        <ol className="list-decimal list-inside text-justify [&>li]:mb-2">
          <li>
            Información de contacto, como nombre, dirección de correo
            electrónico, número de teléfono y dirección postal.
          </li>
          <li>
            Información de pago, como datos de tarjetas de crédito o débito.
          </li>
          <li>
            Información demográfica, como edad, género y ubicación.
          </li>
          <li>
            Información de salud y estado físico proporcionada voluntariamente
            para la prestación de servicios relacionados con el fitness y la
            salud.
          </li>
          <li>
            Información de uso del sitio web, como direcciones IP, tipo de
            navegador, páginas visitadas y tiempo dedicado en nuestro sitio.
          </li>
        </ol>
        <h2 className="text-2xl font-bold mt-8">Cómo utilizamos la información.</h2>
        <p className="text-justify mb-8">
          Utilizamos la información recopilada para los siguientes fines:
        </p>
        <ol className="list-decimal list-inside text-justify [&>li]:mb-2">
          <li>Procesar pagos y proporcionar los servicios solicitados.</li>
          <li>Personalizar y mejorar la experiencia del usuario.</li>
          <li>
            Comunicarnos con usted sobre servicios, promociones u otras
            actividades relacionadas con el gimnasio.
          </li>
          <li>Cumplir con obligaciones legales y regulatorias.</li>
          <li>
            Garantizar la seguridad y protección de nuestros usuarios y del
            gimnasio.
          </li>
        </ol>
        <h2 className="text-2xl font-bold mt-8">Divulgación de información.</h2>
        <p className="text-justify mb-8">
          No vendemos, alquilamos ni compartimos su información personal con
          terceros, excepto en los siguientes casos:
        </p>
        <ol className="list-decimal list-inside text-justify [&>li]:mb-2">
          <li>Con su consentimiento explícito.</li>
          <li>
            Para cumplir con la ley, procesos legales o solicitudes
            gubernamentales.
          </li>
          <li>
            Para proteger los derechos, la propiedad o la seguridad de Fit Vibes
            Gym o de nuestros usuarios.
          </li>
        </ol>
        <h2 className="text-2xl font-bold mt-8">Seguridad de la información.</h2>
        <p className="text-justify mb-8">
          Implementamos medidas de seguridad técnicas, administrativas y físicas
          para proteger la información personal contra accesos no autorizados,
          uso indebido o divulgación.
        </p>
        <h2 className="text-2xl font-bold">
          Acceso y control de su información.
        </h2>
        <p className="text-justify mb-8">
          Puede acceder, corregir o eliminar su información personal en cualquier
          momento poniéndose en contacto con nosotros a través de los datos de
          contacto proporcionados al final de esta política.
        </p>
        <h2 className="text-2xl font-bold">
          Cambios en la política de privacidad.
        </h2>
        <p className="text-justify mb-8">
          Nos reservamos el derecho de actualizar o modificar esta Política de
          Privacidad en cualquier momento. Se le notificará sobre cualquier cambio
          significativo mediante una notificación en nuestro sitio web o por
          otros medios adecuados.
        </p>
        <h2 className="text-2xl font-bold">Contacto.</h2>
        <p className="text-justify mb-8">
          Si tiene alguna pregunta sobre esta Política de Privacidad o sobre
          nuestras prácticas de privacidad, póngase en contacto con nosotros a
          través de los siguientes datos:
        </p>
        <p className="text-justify">
          Fit Vibes Gym
          <br />
          Blvd. Fundadores 6725, El Rubi, 22626 Tijuana, B.C.
          <br />
          <a href="tel:+526647576235" className="text-blue-500">
            (664)757-6235
          </a>
          <br />
          <a href="mailto:contacto@fitvibesgym.mx" className="text-blue-500">
            contacto@fitvibesgym.mx
          </a>
        </p>
        <p className="text-justify">
          Fecha de última actualización: 13 de Mayo del 202
        </p>
      </div>

    </section>
  );
}
