"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
// Extender la interfaz Window para incluir wpwlOptions
declare global {
  interface Window {
    wpwlOptions?: {
      maskCvv: boolean;
      locale: string;
      requireCvv: boolean;
      registrations: { requireCvv: boolean };
      allowEmptyCvv: boolean;
      onReady?: () => void;
    };
  }
}

const PaymentStatus = () => {
  const searchParams = useSearchParams();
  const ID = searchParams.get("ID");
  const formulario = searchParams.get("base64");
  const bookclassinfos = searchParams.get("bookclassinfos");

  const [loading, setLoading] = useState(true);
  const [telefonoError, setTelefonoError] = useState("");

  useEffect(() => {
    if (ID) {
      setLoading(false);
    }
  }, [ID]);

  useEffect(() => {
    const loadPaymentWidgets = async () => {
      // Verifica que ID esté definido y no sea null
      if (!ID) {
        console.error("ID no definido o nulo.");
        return;
      }

      // Cargar el script de paymentWidgets.js
      const script = document.createElement("script");
      script.src = `https://${process.env.NEXT_PUBLIC_URL_PAYMENT}/v1/paymentWidgets.js?checkoutId=${ID}`;
      script.async = true;
      script.onload = () => {
        initializePaymentWidgets();
      };
      document.body.appendChild(script);
    };
    const initializePaymentWidgets = () => {
      window.wpwlOptions = {
        maskCvv: true,
        locale: "es",
        requireCvv: true,
        registrations: { requireCvv: true },
        allowEmptyCvv: false,
        onReady: function () {
          const createRegistrationHtml =
            '<div id="customer.email" class="customInput">Email: <input type="text" class="wpwl-control" name="customer.email" value=""></div>' +
            '<div id="customer.phone" class="customInput">Teléfono ej.(52-6641501234): <input type="text" class="wpwl-control" id="telefono" name="customer.phone" maxlength="15" value="52-"></div>' +
            '<div id="billing.street1" class="customInput">Dirección: <input type="text" class="wpwl-control" name="billing.street1" value="" maxlength="48"></div>' +
            '<div id="billing.postcode" class="customInput">Código Postal: <input type="text" class="wpwl-control" name="billing.postcode" value="" maxlength="9"></div>' +
            '<div id="billing.city" class="customInput">Cuidad: <input type="text" class="wpwl-control" name="billing.city" value="" maxlength="20"></div>';

          // Encontrar el formulario de manera segura
          const form = document.querySelector("form.wpwl-form-card");
          if (!form) {
            console.error("Formulario no encontrado.");
            return;
          }

          // Encontrar el botón de manera segura dentro del formulario
          const button = form.querySelector(".wpwl-button");

          if (!button) {
            console.error("Botón no encontrado dentro del formulario.");
            return;
          }

          // Crear elementos HTML a partir de createRegistrationHtml
          const wrapper = document.createElement("div");
          wrapper.innerHTML = createRegistrationHtml;
          const elements = Array.from(wrapper.children);

          // Insertar los elementos antes del botón
          elements.forEach((element) => {
            button.parentNode?.insertBefore(element, button);
          });

          // Aplicar formato al campo de teléfono después de insertarlo en el DOM
          const telefonoInput = document.getElementById("telefono");
          const submitButton = document.querySelector(".wpwl-button");
          if (telefonoInput) {
            telefonoInput.addEventListener("input", function (e) {
              const target = e.target as HTMLInputElement; // Aserción de tipo
              let value = target.value.replace(/[^0-9]/g, ""); // Elimina todos los caracteres que no sean números
              if (value.length > 2) {
                value = value.substring(0, 2) + "-" + value.substring(2);
              }
              target.value = value;
              if (value.length < 12) {
                if (submitButton) {
                  submitButton.setAttribute("disabled", "true");
                  submitButton.classList.add("disabled");
                }

                setTelefonoError(
                  "Por favor ingresa un número completo de teléfono (mínimo 11 dígitos)."
                );
              } else {
                if (submitButton) {
                  submitButton.removeAttribute("disabled");
                  submitButton.classList.remove("disabled"); //
                }

                setTelefonoError("");
              }
            });
          }
        },
      };

      // Asegurarse de que el script wpwlOptions se ejecute
      if (
        window.wpwlOptions &&
        typeof window.wpwlOptions.onReady === "function"
      ) {
        window.wpwlOptions.onReady();
      }
    };

    if (ID) {
      loadPaymentWidgets();
    }
  }, [ID]);

  if (loading) {
    return (
      <section className="w-full bg-white flex flex-col justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </section>
    );
  }

  const info = {
    id: ID ?? null,
    base64: formulario ?? null,
    bookclassinfos: bookclassinfos ?? null,
  };

  // Create a new object with only string values
  const params: Record<string, string> = Object.fromEntries(
    Object.entries(info)
      .filter(([_, value]) => value !== null)
      .map(([key, value]) => [key, value as string])
  );

  const queryString = new URLSearchParams(params).toString();
  console.log(queryString);

  return (
    <>
      <section className="bg-white relative">
        <div className="w-full min-h-screen flex flex-col justify-around items-center gap-5 pt-24 content-center">
          <form
            action={`${process.env.NEXT_PUBLIC_APP_URL}/statusPayment?${queryString}`}
            className="paymentWidgets wpwl-form-card"
            data-brands="VISA MASTER AMEX"
          ></form>
          {telefonoError && <p style={{ color: "red" }}>{telefonoError}</p>}
        </div>
      </section>
      <div>
        <h1>Payment Page</h1>
        {ID && (
          <Script
            src={`https://${process.env.NEXT_PUBLIC_URL_PAYMENT}/v1/paymentWidgets.js?checkoutId=${ID}`}
          />
        )}
      </div>
    </>
  );
};

const Home = () => (
  <Suspense
    fallback={
      <section className="w-full bg-white flex flex-col justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </section>
    }
  >
    <PaymentStatus />
  </Suspense>
);

export default Home;
