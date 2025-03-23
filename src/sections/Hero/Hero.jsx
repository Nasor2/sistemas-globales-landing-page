import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TestimonialCard from "../../components/HeroComponents/TestimonialCard";
import { testimonials1 } from "../../data/testimonialsData";
import { heroImages } from "../../data/imageData";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  // Variantes para las animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };
  
  const testimonialAnimation = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  // Nueva animación para botones
  const buttonAnimation = {
    hover: { 
      scale: 1.03, 
      translateY: -3
    },
    tap: { 
      scale: 0.97 
    }
  };

  return (
    <section className="min-h-screen w-full bg-white py-4 lg:py-6 overflow-hidden pt-24 sm:pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Contenido Izquierdo */}
          <motion.div 
            className="w-full lg:w-4/12 z-10 pb-30 text-center lg:text-left mx-auto lg:mx-0"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="mb-3" variants={fadeIn}>
              <span className="inline-flex items-center text-green-600 font-medium text-lg bg-green-100 px-4 py-1 rounded-full">
                ✦ Alcance Masivo
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl lg:text-5xl font-bold text-azul-primario leading-[60px] mb-6"
              variants={fadeIn}
            >
              Conquista la ciudad y{" "}
              <span className="text-rojo-primario">dispara tus ventas</span> con
              pantallas digitales
            </motion.h1>

            <motion.p 
              className="text-lg mb-2 w-3/4 text-center lg:text-left mx-auto lg:mx-0"
              variants={fadeIn}
            >
              Publicidad exterior digital de{" "}
              <span className="font-bold text-azul-primario">alto impacto</span>{" "}
              que{" "}
              <span className="text-rojo-primario font-bold">
                conecta con tu audiencia
              </span>{" "}
              en los momentos clave.
            </motion.p>

            <motion.div 
              className="flex flex-col items-center lg:items-start gap-6 mt-8"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="w-4/5 sm:w-3/4">
                <Link to="/contacto" className="w-full block">
                  <motion.button 
                    className="relative group bg-gradient-to-r from-rojo-primario to-red-600 text-white font-semibold py-4 px-6 w-full rounded-full shadow-lg shadow-red-600/30 flex items-center justify-center overflow-hidden"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonAnimation}
                  >
                    <span className="relative z-10 flex items-center">
                      Aparta tu espacio ahora
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-rojo-primario opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </motion.button>
                </Link>
              </motion.div>
              
              <motion.div variants={fadeIn} className="w-4/5 sm:w-3/4">
                <Link to="/ubicaciones" className="w-full block">
                  <motion.button 
                    className="relative group bg-gradient-to-r from-azul-primario to-blue-900 text-white font-semibold py-4 px-6 w-full rounded-full shadow-lg shadow-azul-primario/30 flex items-center justify-center overflow-hidden border border-blue-800/20"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonAnimation}
                  >
                    <span className="relative z-10 flex items-center">
                      Explorar ubicaciones
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-900 to-azul-primario opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Contenido Derecho - Imágenes */}
          <motion.div 
            className="w-full lg:w-7/12 relative justify-between hidden lg:flex"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="relative justify-between">
              <div className="relative justify-between">
                <motion.div
                  className="flex items-center justify-center relative rounded-[265.50px] overflow-hidden border-2 border-gray-200 shadow-2xl bg-gradient-to-b from-white to-gray-50"
                  style={{
                    height: "742px",
                    width: "531px",
                  }}
                  variants={imageAnimation}
                >
                  <img
                    data-layer="Rectangle 4"
                    className="Rectangle4 w-[473px] h-[673px] rounded-[250px] object-cover object-center transition-transform duration-700 hover:scale-105"
                    src={heroImages.mainImage.mainImage}
                  />
                </motion.div>

                <motion.div 
                  className="absolute -left-6 md:-left-16 top-1/7 z-20"
                  variants={testimonialAnimation}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                >
                  <TestimonialCard testimonial={testimonials1[0]} />
                </motion.div>

                <motion.div 
                  className="absolute -right-6 md:-right-16 top-2/4 z-20"
                  variants={testimonialAnimation}
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                >
                  <TestimonialCard testimonial={testimonials1[1]} />
                </motion.div>

                <motion.div 
                  className="absolute bottom-1 right-2/5 z-20"
                  variants={testimonialAnimation}
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.8 }}
                >
                  <TestimonialCard testimonial={testimonials1[2]} />
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="hidden lg:flex flex-col gap-6 h-full justify-between"
              variants={staggerContainer}
            >
              {heroImages.showcaseImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="w-60 h-60 rounded-xl overflow-hidden shadow-lg border border-gray-200 relative group"
                  variants={imageAnimation}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-azul-primario/30 to-azul-primario-oscuro/30 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>

                  <img
                    src={img}
                    alt={`Digital billboard example ${index + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute top-0 left-0 w-16 h-16 bg-white/30 blur-md rounded-full -translate-x-8 -translate-y-8"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/30 blur-md rounded-full translate-x-8 translate-y-8"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;