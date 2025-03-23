import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) observer.observe(ctaSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="cta-section"
      className="w-full bg-white px-4 py-8 flex justify-center items-center"
    >
      <motion.div
        className="w-full max-w-6xl rounded-3xl bg-azul-primario py-12 md:py-16 px-6 md:px-10 overflow-hidden relative"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Maximiza tu impacto publicitario
            </h2>
            <p className="text-white text-sm md:text-base opacity-80 max-w-2xl mx-auto">
              Únete a las marcas que han potenciado su visibilidad con nuestras
              pantallas LED de alta resolución.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="/contacto"
              className="w-auto bg-rojo-primario hover:bg-red-800 text-white font-medium text-base py-3 px-8 rounded-full transition-all duration-200 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Cotización
            </motion.a>
            <motion.a
              href="/ubicaciones"
              className="w-auto bg-transparent border border-white text-white font-medium text-base py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-200 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Ubicaciones
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="absolute top-0 left-1/2 w-1/3 h-1/3 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isVisible ? { scale: 1, opacity: 0.1 } : { scale: 0.8, opacity: 0 }
          }
          transition={{ duration: 0.8, delay: 0.1 }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-white opacity-10 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isVisible ? { scale: 1, opacity: 0.1 } : { scale: 0.8, opacity: 0 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default CTA;
