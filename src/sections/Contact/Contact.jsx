import React, { useState, useEffect } from "react";
import { MailIcon, ChevronRight, PhoneCall, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    mensaje: "",
    asunto: "",
    email: "",
    nombre: "",
    apellido: ""
  });

  const [isVisible, setIsVisible] = useState(false);

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
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log(formData);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div id="contacto" className="relative max-w-full mx-auto px-4 py-12 md:py-20">
      {/* Etiqueta de contacto */}
      <motion.div 
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full tracking-wide inline-flex items-center">
          <MailIcon className="mr-2 h-5 w-5" /> Contacto
        </span>
      </motion.div>

      {/* Título y Subtítulo */}
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-azul-primario mb-5 max-w-4xl mx-auto leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Ponte en contacto
      </motion.h2>

      <motion.p 
        className="text-gray-600 text-center mb-16 max-w-3xl mx-auto text-sm sm:text-base"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Todos nuestros planes están personalizados para adaptarse a las necesidades de equipos pequeños y grandes.
      </motion.p>

      {/* Contenedor del formulario con sección izquierda */}
      <motion.div 
        className="max-w-5xl mx-auto overflow-hidden rounded-4xl shadow-xl flex flex-col md:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Sección izquierda con detalles útiles */}
        <motion.div 
          className="bg-gradient-to-br from-azul-primario via-azul-primario-claro to-azul-primario-oscuro text-white p-8 md:p-10 md:w-2/5 relative"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold mb-6">Estamos para ayudarte</h3>
          <p className="mb-8 text-gray-200">
            Nuestro equipo está disponible para resolver todas tus dudas.
          </p>
          
          <div className="space-y-6">
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <div className="bg-azul-primario-claro p-3 rounded-full mr-4">
                <MailIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Escríbenos a</p>
                <p className="font-medium">info@tuempresa.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <div className="bg-azul-primario-claro p-3 rounded-full mr-4">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Llámanos al</p>
                <p className="font-medium">+34 123 456 789</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <div className="bg-azul-primario-claro p-3 rounded-full mr-4">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Horario de atención</p>
                <p className="font-medium">Lun - Vie: 9:00 - 18:00</p>
              </div>
            </motion.div>
          </div>
          
          {/* Forma decorativa */}
          <div className="absolute bottom-0 left-0 w-full h-64 opacity-10 overflow-hidden">
            <div className="absolute transform -rotate-45 bg-white rounded-full w-64 h-64 -bottom-32 -left-32"></div>
          </div>
        </motion.div>

        {/* Formulario de contacto con sombra externa */}
        <motion.div 
          className="bg-gray-50 p-8 md:p-10 md:w-3/5 shadow-2xl rounded-r-4xl"
          variants={itemVariants}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Mensaje */}
            <motion.div variants={itemVariants}>
              <textarea
                name="mensaje"
                placeholder="Escribe tu mensaje"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>

            {/* Asunto */}
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={formData.asunto}
                onChange={handleChange}
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            {/* Nombre y Apellido */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              variants={itemVariants}
            >
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </motion.div>

            {/* Aviso de privacidad */}
            <motion.div 
              className="text-xs text-gray-500 mt-2 mb-2 text-center"
              variants={itemVariants}
            >
              Este sitio está protegido por reCAPTCHA y la Política de Privacidad 
              y Términos de Servicio de Google aplican.
            </motion.div>

            {/* Botón de envío */}
            <motion.div 
              className="pt-4"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="w-full bg-rojo-primario hover:bg-red-700 text-white font-medium py-4 px-6 rounded-full transition-colors duration-300 flex items-center justify-center"
              >
                Enviar mensaje
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;