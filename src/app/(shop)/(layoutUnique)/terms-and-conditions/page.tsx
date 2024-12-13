 
 

export default async function Home( ) { 
 

  return (
    <section className=" w-full flex flex-col bg-slate-50 min-h-screen justify-center items-center pb-24">
      
      <div className="w-full container p-5   rounded-lg mt-[100px] text-xl  ">
        <h1 className="text-3xl font-bold text-center mb-8">Términos y Condiciones de Uso</h1>
        <p className="text-justify mb-8">
          Por favor, lea detenidamente estos Términos y Condiciones antes de utilizar los
          servicios ofrecidos por Fit Vibes Gym. Al utilizar nuestros servicios, usted acepta
          estar legalmente obligado por los términos y condiciones que se detallan a
          continuación:
        </p>
        <ol className="list-decimal list-inside text-justify [&>li]:mb-8">
          <li>
            <strong>Aceptación de Términos</strong>
            <p>
              Al utilizar los servicios de Fit Vibes Gym, usted acepta cumplir estos Términos y
              Condiciones. Si no está de acuerdo con alguna parte de estos términos, no utilice
              nuestros servicios.
            </p>
          </li>
          <li>
            <strong>Uso de Instalaciones</strong>
            <p>
              El acceso a las instalaciones del gimnasio está sujeto a las reglas y regulaciones
              internas del gimnasio, que deben seguirse en todo momento. El gimnasio se reserva
              el derecho de negar el acceso o expulsar a cualquier persona que no cumpla con
              estas reglas.
            </p>
          </li>
          <li>
            <strong>Responsabilidad del Usuario</strong>
            <p>
              El usuario reconoce y acepta que el uso de las instalaciones y equipos del gimnasio
              conlleva riesgos inherentes, y acepta asumir la responsabilidad total de su seguridad
              y bienestar mientras esté presente en el gimnasio. El gimnasio no se hace
              responsable de lesiones personales, pérdida o daño a la propiedad.
            </p>
          </li>
          <li>
            <strong>Pago y Facturación</strong>
            <p>
              El usuario se compromete a abonar las tarifas correspondientes por el uso de los
              servicios del gimnasio según lo acordado en el momento de la inscripción. Las
              tarifas pueden estar sujetas a cambios periódicos, y cualquier modificación será
              notificada con anticipación.
            </p>
          </li>
          <li>
            <strong>Cancelación y Reembolsos</strong>
            <p>
              El usuario puede cancelar su membresía según las políticas establecidas por el
              gimnasio. Las cancelaciones pueden estar sujetas a cargos adicionales. No se
              otorgan reembolsos por membresías canceladas o períodos de membresía no
              utilizados, a menos que se especifique lo contrario.
            </p>
          </li>
          <li>
            <strong>Propiedad Intelectual</strong>
            <p>
              Todos los derechos de propiedad intelectual relacionados con el contenido y los
              materiales proporcionados por Fit Vibes Gym son propiedad exclusiva del gimnasio.
              El usuario no tiene derecho a reproducir, distribuir o utilizar de otra manera dicho
              contenido sin el consentimiento expreso del gimnasio.
            </p>
          </li>
          <li>
            <strong>Modificaciones de los Términos y Condiciones</strong>
            <p>
              El gimnasio se reserva el derecho de modificar estos Términos y Condiciones en
              cualquier momento. Las modificaciones entrarán en vigencia inmediatamente
              después de su publicación en el sitio web del gimnasio. El uso continuado de
              nuestros servicios después de la publicación de cualquier modificación constituirá
              su aceptación de dichas modificaciones.
            </p>
          </li>
          <li>
            <strong>Ley Aplicable</strong>
            <p>
              Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes de
              México sin tener en cuenta sus conflictos de disposiciones legales.
            </p>
          </li>
        </ol>
        <p className="text-justify">
          Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor contáctenos en <a href="mailto:contacto@fitvibesgym.mx" className="text-blue-500">contacto@fitvibesgym.mx</a> o al <a href="tel:+526647576235" className="text-blue-500">(664)757-6235</a>.
        </p>
        <p className="text-justify">
          Fecha de entrada en vigor: 13 de mayo del 2024
        </p>
      </div>


    </section>
  );
}
