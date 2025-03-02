import React from "react";
import { motion } from "framer-motion";
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom';

const ProcessStep = ({ number, title, description, delay }) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-36 h-36 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full border-2 border-gray-300 flex flex-col items-center justify-center p-4 bg-white relative shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-red-500 font-bold text-lg md:text-xl">{title}</h3>
        <p className="text-xs md:text-sm text-center mt-2 text-gray-600 max-w-[120px] md:max-w-[140px]">{description}</p>
        
        {/* Numbered circle */}
        <motion.div 
          className="absolute -right-2 -top-2 md:right-0 md:-top-4 w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-red-500/30"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {number.toString().padStart(2, '0')}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesBelow = () => {
  const processSteps = [
    {
      number: 1,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {
      number: 2,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    },
    {
      number: 3,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="w-full max-w-full mx-auto px-4 md:px-8 lg:px-16 xl:max-w-6xl">
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-red-500">Lorem</span>{" "}
            <span className="text-[#1e2937]">Ipsum</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-10 relative">
          {/* Connecting dotted lines - shortened width */}
          <motion.div 
            className="hidden md:block absolute top-1/2 left-[20%] right-[20%] border-t-4 border-dashed border-gray-300 z-0"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          
          {processSteps.map((step, index) => (
            <ProcessStep 
              key={step.number} 
              number={step.number} 
              title={step.title} 
              description={step.description}
              delay={index}
            />
          ))}
        </div>
        
        {/* Logo at bottom right - adjusted position */}
        <motion.div 
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: 1.2 
          }}
          whileHover={{ 
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
        <Link to="/" className="flex items-center space-x-4">
            <img src={logo} alt="Sistemas Globales" className="h-18 w-auto" />
        </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesBelow;