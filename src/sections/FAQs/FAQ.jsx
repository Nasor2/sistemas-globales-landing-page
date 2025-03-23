import React, { useState, useEffect } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openItems, setOpenItems] = useState([1]);
  const [hoveredItem, setHoveredItem] = useState(null);
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
    
    const section = document.getElementById("faq-section");
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  const toggleItem = (id) => {
    setOpenItems(prevOpenItems => 
      prevOpenItems.includes(id)
        ? prevOpenItems.filter(item => item !== id)
        : [...prevOpenItems, id]
    );
  };

  const faqItems = [
    {
      id: 1,
      question: "¿Qué tipos de pantallas digitales ofrecen para publicidad exterior?",
      answer: "Ofrecemos una variedad de pantallas LED de alta definición para publicidad exterior, desde pantallas gigantes en avenidas principales hasta displays más pequeños para centros comerciales. Nuestras pantallas cuentan con tecnología de última generación que garantiza visibilidad perfecta incluso bajo luz solar directa, alta resistencia a condiciones climáticas adversas y consumo energético optimizado."
    },
    {
      id: 2,
      question: "¿Cuál es el alcance promedio de sus pantallas publicitarias?",
      answer: "El alcance varía según la ubicación, pero nuestras pantallas estratégicamente posicionadas en zonas de alto tráfico garantizan una exposición diaria promedio de 50,000 a 100,000 personas. Nuestros estudios de medición de audiencia, realizados por empresas certificadas, proporcionan datos precisos sobre el alcance de cada ubicación, perfil demográfico e impactos generados por cada campaña."
    },
    {
      id: 3,
      question: "¿Cómo puedo contratar espacio publicitario en sus pantallas?",
      answer: "El proceso es muy sencillo. Puede contactarnos a través de nuestro formulario web, correo electrónico o teléfono para solicitar una cotización. Uno de nuestros asesores le presentará las opciones disponibles según sus necesidades de campaña, presupuesto y público objetivo. Ofrecemos contratos flexibles desde 7 días hasta campañas anuales, con descuentos especiales para contrataciones de mayor duración."
    },
    {
      id: 4,
      question: "¿Qué formatos de archivos aceptan para las creatividades?",
      answer: "Aceptamos formatos de video como MP4, MOV y AVI, así como imágenes estáticas en JPG, PNG o GIF. Para obtener el mejor rendimiento visual, recomendamos resoluciones mínimas de 1920x1080 píxeles para videos y 2048x1536 para imágenes. Contamos con un equipo de diseño que puede asesorarle sobre las mejores prácticas o incluso crear contenido personalizado para su campaña por un costo adicional."
    },
    {
      id: 5,
      question: "¿Ofrecen informes sobre el rendimiento de las campañas?",
      answer: "Sí, proporcionamos informes detallados sobre el rendimiento de su campaña. Nuestros informes incluyen métricas como impresiones estimadas, horas de mayor exposición, y análisis demográfico de la audiencia. Utilizamos tecnología avanzada de reconocimiento facial anónimo para proporcionar datos precisos sobre la cantidad de personas que ven su anuncio y su tiempo de atención, todo cumpliendo con las normativas de privacidad vigentes."
    },
    {
      id: 6,
      question: "¿Cuánto tiempo tarda en activarse una campaña una vez contratada?",
      answer: "Una vez aprobado el contenido y firmado el contrato, podemos tener su campaña activa en nuestras pantallas en un plazo de 24 a 48 horas. Para campañas más complejas que requieran programación especial o sincronización entre múltiples pantallas, el tiempo de implementación puede extenderse hasta 72 horas. Nuestro equipo trabaja con eficiencia para minimizar cualquier retraso y maximizar su tiempo de exposición."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
    <div id="faq-section" className="relative max-w-full mx-auto px-4 py-8 md:py-16">
      {/* FAQ label */}
      <motion.div 
        className="flex justify-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full tracking-wide inline-flex items-center">
          <HelpCircle className="mr-2 h-5 w-5" /> Preguntas Frecuentes
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-azul-primario mb-4 max-w-4xl mx-auto leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Resolvemos tus dudas
      </motion.h2>

      {/* Subheading */}
      <motion.p 
        className="text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Encuentra aquí la información que buscas sobre nuestros servicios y cómo trabajamos
      </motion.p>

      {/* FAQ accordion container */}
      <motion.div 
        className="space-y-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {faqItems.map((item) => (
          <motion.div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          >
            <button 
              className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              onClick={() => toggleItem(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              aria-expanded={openItems.includes(item.id)}
            >
              <h3 className={`text-xl font-medium ${
                openItems.includes(item.id) || hoveredItem === item.id 
                  ? "text-indigo-800" 
                  : "text-gray-800"
              } transition-colors duration-200`}>
                {item.question}
              </h3>
              <motion.div
                initial={false}
                animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className={`h-5 w-5 ${
                  openItems.includes(item.id) || hoveredItem === item.id
                    ? "text-indigo-800"
                    : "text-gray-500"
                } transition-colors duration-300`} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openItems.includes(item.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;