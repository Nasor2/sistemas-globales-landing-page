import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Send,
  MapPin,
  Phone,
  Coins,
  TvMinimal,
  Check,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import fondocard from "../../assets/images/fondo-pricing-section.png";

const PricingContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div ref={ref} className="relative max-w-6xl mx-auto px-4 py-8 md:py-16">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Contact label */}
        <motion.div 
          className="flex justify-center mb-4"
          variants={itemVariants}
        >
          <span className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full tracking-wide inline-flex items-center">
            <Coins className="mr-2 h-5 w-5" /> Cotiza
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-azul-primario mb-4 max-w-3xl mx-auto leading-tight"
          variants={itemVariants}
        >
          Soluciones personalizadas para tu marca
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          className="text-gray-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto text-sm sm:text-base"
          variants={itemVariants}
        >
          Ofrecemos propuestas adaptadas a tus necesidades y presupuesto para
          maximizar el impacto de tu publicidad exterior
        </motion.p>

        {/* Cards container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {/* Green card */}
          <motion.div
            className="relative bg-azul-primario text-white rounded-2xl p-8 shadow-xl flex flex-col overflow-hidden pb-40 md:pb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div
              className="absolute inset-x-0 bottom-0 md:h-1/2 h-40 transform scale-150"
              style={{
                backgroundImage: `url(${fondocard})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 0,
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Destaca tu marca</h3>
              <h4 className="text-3xl font-bold mb-6">Con Sistemas Globales</h4>
              <p className="mb-6">
                Solicita una cotización personalizada y obtén la mejor propuesta
                para tu campaña.
              </p>
              <div className="flex items-center mb-8">
                <Link to="/contacto">
                  <motion.button
                    className="p-2 rounded-full hover:bg-azul-primario-claro transition-colors"
                    aria-label="Ir a la siguiente sección"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="h-8 w-8 text-white" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Pantallas digitales */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg flex flex-col"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <TvMinimal className="mr-3 h-7 w-7 text-azul-primario" />
              <h3 className="text-2xl font-bold text-azul-primario">
                Pantallas Digitales
              </h3>
            </div>
            <h4 className="text-lg font-medium mb-6 text-negro-suave">
              ¿Por qué elegirnos?
            </h4>
            <ul className="space-y-4 mb-8 flex-grow">
              <motion.li 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.5 }}
              >
                <div className="p-1 bg-green-100 rounded-full mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-negro-suave">Ubicaciones estratégicas</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.6 }}
              >
                <div className="p-1 bg-green-100 rounded-full mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-negro-suave">Visibilidad 24/7</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.7 }}
              >
                <div className="p-1 bg-green-100 rounded-full mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-negro-suave">Estadísticas de impacto</span>
              </motion.li>
            </ul>
            <div className="border-t border-gray-200 pt-6 mb-8 flex items-center">
              <Phone className="mr-2 h-5 w-5 text-green-600" />
              <p className="text-lg font-medium text-negro-suave">
                Solicita una cotización
              </p>
            </div>
            <Link to="/contacto" className="mt-auto">
              <motion.button 
                className="w-full bg-rojo-primario text-white py-3 rounded-3xl font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="mr-2 h-4 w-4" />
                Contactar
              </motion.button>
            </Link>
          </motion.div>

          {/* Vallas Publicitarias */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg flex flex-col"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6 mr-2 text-azul-primario" />
              <h3 className="text-2xl font-bold text-azul-primario">
                Vallas Publicitarias
              </h3>
            </div>
            <h4 className="text-lg font-medium mb-6 text-negro-suave">
              Nuestras ventajas
            </h4>
            <ul className="space-y-4 mb-8 flex-grow">
              <motion.li 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.5 }}
              >
                <div className="p-1 bg-green-100 rounded-full mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-negro-suave">
                  Pantallas LED de alta definición
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.6 }}
              >
                <div className="p-1 bg-green-100 rounded-full mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-negro-suave">
                  Alcance diario de más de 50K personas
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.7 }}
              >
                <div className="p-1 bg-green-100 rounded-full mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-negro-suave">
                  Diseño de creatividades incluido
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.8 }}
              >
                <div className="p-1 bg-green-100 rounded-full mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-negro-suave">
                  Reportes mensuales de rendimiento
                </span>
              </motion.li>
            </ul>
            <div className="border-t border-gray-200 pt-6 mb-8 flex items-center">
              <Phone className="mr-2 h-5 w-5 text-green-600" />
              <p className="text-lg font-medium text-negro-suave">
                Asesoría personalizada
              </p>
            </div>
            <Link to="/contacto" className="mt-auto">
              <motion.button 
                className="w-full bg-rojo-primario text-white py-3 rounded-3xl font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="mr-2 h-4 w-4" />
                Solicitar info
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PricingContact;