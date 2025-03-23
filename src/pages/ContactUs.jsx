import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  PhoneCall,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  HelpCircle,
  ShoppingBag,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    mensaje: "",
    asunto: "",
    email: "",
    nombre: "",
    apellido: "",
  });

  // States para controlar la visibilidad de cada sección
  const [heroVisible, setHeroVisible] = useState(false);
  const [contactSectionVisible, setContactSectionVisible] = useState(false);
  const [helpSectionVisible, setHelpSectionVisible] = useState(false);

  useEffect(() => {
    // Configurar los observadores para cada sección
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          heroObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContactSectionVisible(true);
          contactObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const helpObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHelpSectionVisible(true);
          helpObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // Observar las secciones
    const heroSection = document.getElementById("hero-section");
    const contactSection = document.getElementById("contact-section");
    const helpSection = document.getElementById("help-section");

    if (heroSection) heroObserver.observe(heroSection);
    if (contactSection) contactObserver.observe(contactSection);
    if (helpSection) helpObserver.observe(helpSection);

    // Limpiar los observadores
    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
      helpObserver.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="w-full bg-gradient-to-br min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div id="hero-section">
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-green-100 text-green-600 text-sm md:text-lg font-medium px-4 py-2 rounded-full tracking-wide inline-flex items-center">
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Contacto
            </span>
          </motion.div>
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-azul-primario mb-4 md:mb-6 leading-tight">
              ¿Hablamos?
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Estamos aquí para responder a tus preguntas y ayudarte a encontrar
              las mejores soluciones para tu negocio.
            </p>
          </motion.div>
        </div>

        {/* Main Contact Section */}
        <div
          id="contact-section"
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 md:mb-24 px-4"
        >
          {/* Left Column */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -40 }}
            animate={
              contactSectionVisible
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -40 }
            }
            transition={{ duration: 0.7 }}
          >
            <div className=" p-6 md:p-8 rounded-3xl shadow-xl border border-indigo-50 h-full transform transition-all hover:shadow-2xl hover:-translate-y-1">
              <h2 className="text-2xl md:text-3xl font-bold text-azul-primario mb-8 border-b pb-4 border-blue-100 flex items-center">
                <Send className="mr-3 h-6 w-6 md:h-8 md:w-8 text-azul-primario-claro" />
                Contacto Directo{" "}
              </h2>

              <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
                {/* Call Option with Direct Button */}
                <motion.div
                  className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 md:p-5 transition-all hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    contactSectionVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.01, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-indigo-600 p-3 md:p-4 rounded-2xl mr-4 shadow-lg ring-4 ring-indigo-100">
                    <PhoneCall className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm md:text-base">
                      Llámanos
                    </p>
                    <p className="text-indigo-600 font-bold text-base md:text-lg">
                      +34 123 456 789
                    </p>
                  </div>
                  <motion.a
                    href="tel:+34123456789"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 md:p-4 rounded-2xl shadow-md transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PhoneCall className="h-4 w-4 md:h-5 md:w-5" />
                  </motion.a>
                </motion.div>

                {/* WhatsApp Option with Direct Button */}
                <motion.div
                  className="flex items-center bg-green-100  rounded-2xl p-4 md:p-5 transition-all hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    contactSectionVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.01, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-green-500 p-3 md:p-4 rounded-2xl mr-4 shadow-lg ring-4 ring-green-100">
                    <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm md:text-base">
                      WhatsApp
                    </p>
                    <p className="text-green-600 font-bold text-base md:text-lg">
                      +34 123 456 789
                    </p>
                  </div>
                  <motion.a
                    href="https://wa.me/34123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-2xl shadow-md transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                  </motion.a>
                </motion.div>

                {/* Email Option with Direct Button */}
                <motion.div
                  className="flex items-center bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-4 md:p-5 transition-all hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    contactSectionVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.01, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-rojo-primario p-3 md:p-4 rounded-2xl mr-4 shadow-lg ring-4 ring-red-100">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm md:text-base">
                      Email
                    </p>
                    <p className="text-rojo-primario font-bold text-base md:text-lg">
                      contact@lumina.com
                    </p>
                  </div>
                  <motion.a
                    href="mailto:contact@lumina.com"
                    className="bg-rojo-primario hover:bg-red-700 text-white p-3 md:p-4 rounded-2xl shadow-md transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-4 w-4 md:h-5 md:w-5" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Location and Hours with improved styling */}
              <div className="space-y-5 md:space-y-6 border-t border-indigo-100 pt-6">
                <motion.div
                  className="flex items-start p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    contactSectionVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.01, delay: 0.5 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="bg-indigo-100 p-3 rounded-xl mr-4 shadow-md">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-bold text-indigo-600 mb-1 text-sm md:text-base">
                      Ubicación
                    </p>
                    <p className="text-gray-700 text-sm md:text-base">
                      Calle Principal 123, Madrid, España 28001
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    contactSectionVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.01, delay: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="bg-indigo-100 p-3 rounded-xl mr-4 shadow-md">
                    <Clock className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-bold text-indigo-600 mb-1 text-sm md:text-base">
                      Horario
                    </p>
                    <p className="text-gray-700 text-sm md:text-base">
                      Lunes a Viernes: 9:00 - 18:00
                    </p>
                    <p className="text-gray-700 text-sm md:text-base">
                      Sábado: 10:00 - 14:00
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          {/* Right Column - Improved Form */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 40 }}
            animate={
              contactSectionVisible
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 40 }
            }
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="p-6 md:p-10 rounded-3xl shadow-xl border border-indigo-50 transform transition-all hover:shadow-2xl hover:-translate-y-1">
              <h2 className="text-2xl md:text-3xl font-bold text-azul-primario mb-8 border-b pb-4 border-blue-100 flex items-center">
                <Mail className="mr-3 h-6 w-6 md:h-8 md:w-8 text-rojo-primario" />
                Envíanos un mensaje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* Name and Surname */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={
                      contactSectionVisible
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 15 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="group"
                  >
                    <label
                      htmlFor="nombre"
                      className="block text-gray-700 font-semibold mb-2 text-sm md:text-base group-hover:text-rojo-primario transition-colors"
                    >
                      Nombre
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rojo-primario focus:border-transparent transition-all text-sm md:text-base shadow-sm group-hover:shadow-md"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={
                      contactSectionVisible
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 15 }
                    }
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="group"
                  >
                    <label
                      htmlFor="apellido"
                      className="block text-gray-700 font-semibold mb-2 text-sm md:text-base group-hover:text-rojo-primario transition-colors"
                    >
                      Apellido
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        placeholder="Tu apellido"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rojo-primario focus:border-transparent transition-all text-sm md:text-base shadow-sm group-hover:shadow-md"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={
                    contactSectionVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 15 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="group"
                >
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2 text-sm md:text-base group-hover:text-rojo-primario transition-colors"
                  >
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="tu@email.com"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rojo-primario focus:border-transparent transition-all text-sm md:text-base shadow-sm group-hover:shadow-md"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Mail className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-hover:text-rojo-primario transition-colors" />
                  </div>
                </motion.div>

                {/* Subject */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={
                    contactSectionVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 15 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="group"
                >
                  <label
                    htmlFor="asunto"
                    className="block text-gray-700 font-semibold mb-2 text-sm md:text-base group-hover:text-rojo-primario transition-colors"
                  >
                    Asunto
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="asunto"
                      name="asunto"
                      placeholder="¿Sobre qué quieres hablar?"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rojo-primario focus:border-transparent transition-all text-sm md:text-base shadow-sm group-hover:shadow-md"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={
                    contactSectionVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 15 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="group"
                >
                  <label
                    htmlFor="mensaje"
                    className="block text-gray-700 font-semibold mb-2 text-sm md:text-base group-hover:text-rojo-primario transition-colors"
                  >
                    Mensaje
                  </label>
                  <div className="relative">
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rojo-primario focus:border-transparent transition-all text-sm md:text-base shadow-sm group-hover:shadow-md"
                      rows="5"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <MessageCircle className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-hover:text-rojo-primario transition-colors" />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={
                    contactSectionVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 15 }
                  }
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rojo-primario to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-4 md:py-5 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:shadow-xl text-base md:text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enviar Mensaje
                    <ChevronRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
                  </motion.button>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    Responderemos a tu consulta en menos de 24 horas
                  </p>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Help & Support Section */}
        <div id="help-section" className="mt-16 md:mt-20 px-4">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-4 text-azul-primario"
            initial={{ opacity: 0, y: 30 }}
            animate={
              helpSectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
          >
            Áreas de Asistencia
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={
              helpSectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nuestro equipo especializado está preparado para atenderte en todas
            estas áreas. Selecciona el departamento que mejor se adapte a tu
            consulta.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <motion.div
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-indigo-50 hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              initial={{ opacity: 0, x: -30 }}
              animate={
                helpSectionVisible
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.01, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-pink-400 p-3 md:p-4 rounded-xl mb-4 md:mb-6 inline-block">
                <ShoppingBag className="h-5 w-5 md:h-7 md:w-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-pink-600">
                Ventas y Presupuestos
              </h3>
              <p className="text-negro-suave mb-4 md:mb-5 text-sm md:text-base">
                Solicita información personalizada sobre nuestras soluciones
                adaptadas a tus necesidades.
              </p>
              <motion.a
                href="mailto:ventas@lumina.com"
                className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors text-sm md:text-base"
                whileHover={{ x: 5 }}
              >
                ventas@lumina.com
                <ChevronRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
              </motion.a>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-indigo-50 hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              initial={{ opacity: 0, x: 30 }}
              animate={
                helpSectionVisible
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 30 }
              }
              transition={{ duration: 0.01, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-green-500 p-3 md:p-4 rounded-xl mb-4 md:mb-6 inline-block">
                <HelpCircle className="h-5 w-5 md:h-7 md:w-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-green-600">
                Soporte Técnico
              </h3>
              <p className="text-negro-suave mb-4 md:mb-5 text-sm md:text-base">
                Asistencia especializada para resolver cualquier incidencia con
                nuestros sistemas de publicidad exterior.
              </p>
              <motion.a
                href="mailto:soporte@lumina.com"
                className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors text-sm md:text-base"
                whileHover={{ x: 5 }}
              >
                soporte@lumina.com
                <ChevronRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
