import React, { useState, useEffect } from "react";
import {
  MailIcon,
  ChevronRight,
  PhoneCall,
  Clock,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    mensaje: "",
    asunto: "",
    email: "",
    nombre: "",
    apellido: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contacto");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      // Reemplaza esto con la URL de tu script de Google Apps Script
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxTkcFcXHxNV7jhb0Hq_skWOwl-6BC9sWBXtejw_bljjcSOxw57e9eBsh8wJ8oYnQ50/exec";

      // Enviar los datos al script
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Importante para evitar problemas de CORS con Google Apps Script
      });

      // Debido a no-cors, no podemos leer la respuesta, así que asumimos éxito
      // Si hay problemas, deberás verificar los logs en el panel de Google Apps Script
      setSubmitStatus({
        success: true,
        message:
          "¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.",
      });

      // Resetear el formulario después de enviar
      setFormData({
        mensaje: "",
        asunto: "",
        email: "",
        nombre: "",
        apellido: "",
      });
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setSubmitStatus({
        success: false,
        message:
          "Hubo un error al enviar el mensaje. Por favor intenta nuevamente.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="relative max-w-full mx-auto px-4 py-8"
    >
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <span className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full inline-flex items-center mb-4">
          <MailIcon className="mr-2 h-5 w-5" /> Contacto
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-azul-primario mb-4">
          Contáctanos
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Todos nuestros planes están personalizados para adaptarse a las
          necesidades de equipos pequeños y grandes.
        </p>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-rojo-primario p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MailIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">Correo Electrónico</h3>
            <a
              href="mailto:sistemasglobales.adm@gmail.com"
              className="text-azul-primario-claro hover:underline block"
            >
              sistemasglobales.adm@gmail.com
            </a>
            <a
              href="mailto:Pantallasctg@gmail.com"
              className="text-azul-primario-claro hover:underline block"
            >
              Pantallasctg@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <PhoneCall className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">Teléfono</h3>
            <a
              href="tel:+573002433252"
              className="text-azul-primario-claro hover:underline block"
            >
              +57 300 243 3252
            </a>
            <a
              href="tel:+573112788357"
              className="text-azul-primario-claro hover:underline block"
            >
              +57 311 278 8357
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-green-500 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/+573002433252?text=Hola Sistemas Globales,%20estoy%20interesado%20en%20obtener%20información%20sobre%20sus%20pantallas%20publicitarias%20en%20Cartagena.%20¿Podrían%20proporcionarme%20detalles%20sobre%20disponibilidad,%20tarifas%20y%20el%20proceso%20para%20contratar%20este%20servicio?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-2 px-4 rounded-lg inline-flex items-center hover:bg-green-600 transition-colors"
            >
              Chatea ahora
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-xl bg-white">
        <div className="flex flex-col md:flex-row">
          {/* Left Info Panel */}
          <div className="bg-gradient-to-br from-azul-primario via-blue-800 to-blue-700 text-white p-8 md:p-10 md:w-2/5">
            <h3 className="text-2xl font-bold mb-6">Estamos para ayudarte</h3>
            <p className="mb-8 text-gray-200">
              Cuéntanos sobre tu proyecto y te contactaremos a la brevedad.
            </p>

            {/* Business Hours */}
            <div className="mt-8 border-t border-blue-400 pt-6">
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-lg">Horario de atención</p>
                  <p className="text-gray-200">Lunes - Sábado</p>
                  <p className="text-gray-200">6:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="relative mt-12">
              <div className="absolute inset-0 bg-white opacity-5 rounded-full -bottom-24 -right-24 w-64 h-64"></div>
              <div className="absolute inset-0 bg-white opacity-5 rounded-full -bottom-12 -left-12 w-40 h-40"></div>
            </div>
          </div>

          {/* Right Form */}
          <div className="p-8 md:p-10 md:w-3/5">
            {submitStatus.success === true ? (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {submitStatus.message}
                </p>
                <button
                  onClick={() =>
                    setSubmitStatus({ success: null, message: "" })
                  }
                  className="bg-azul-primario hover:bg-azul-primario-oscuro text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {submitStatus.success === false && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <p>{submitStatus.message}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-azul-primario-claro focus:border-transparent"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                  />
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-azul-primario-claro focus:border-transparent"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-azul-primario-claro focus:border-transparent"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                />

                <input
                  type="text"
                  name="asunto"
                  placeholder="Asunto"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-azul-primario-claro focus:border-transparent"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                />

                <textarea
                  name="mensaje"
                  placeholder="Escribe tu mensaje"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-azul-primario-claro focus:border-transparent"
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-rojo-primario hover:bg-red-600 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader className="animate-spin mr-2 h-5 w-5" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
