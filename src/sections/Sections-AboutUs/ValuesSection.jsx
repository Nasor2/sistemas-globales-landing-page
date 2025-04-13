import React from 'react';
import { Users, Lightbulb, Eye, Briefcase, Shield, Building2 } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    { 
      id: 1, 
      title: "Trabajo en Equipo",
      description: "Colaboramos eficazmente, combinando nuestras fortalezas individuales para lograr objetivos comunes y superar desafíos juntos.",
      icon: Users,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      borderColor: "border-blue-500"
    },
    { 
      id: 2, 
      title: "Innovación", 
      description: "Exploramos nuevas ideas constantemente, buscando soluciones creativas que impulsen el crecimiento y la evolución continua.",
      icon: Lightbulb,
      color: "bg-amber-500",
      textColor: "text-amber-500",
      borderColor: "border-amber-500"
    },
    { 
      id: 3, 
      title: "Transparencia", 
      description: "Cultivamos la confianza a través de la comunicación clara, la honestidad y la accesibilidad en todas nuestras interacciones.",
      icon: Eye,
      color: "bg-teal-500",
      textColor: "text-teal-500",
      borderColor: "border-teal-500"
    },
    { 
      id: 4, 
      title: "Profesionalismo", 
      description: "Mantenemos los más altos estándares en nuestro trabajo, demostrando excelencia, responsabilidad y compromiso constante.",
      icon: Briefcase,
      color: "bg-violet-500",
      textColor: "text-violet-500",
      borderColor: "border-violet-500"
    },
    { 
      id: 5, 
      title: "Lealtad", 
      description: "Construimos relaciones duraderas basadas en el respeto mutuo, la confianza y el compromiso con el bienestar común.",
      icon: Shield,
      color: "bg-rose-500",
      textColor: "text-rose-500",
      borderColor: "border-rose-500"
    }
  ];

  return (
    <div className="py-24 bg-white" id="valores-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section - SIN animación de entrada */}
        <div className="text-center mb-16">
          <span className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full tracking-wide inline-flex items-center mb-4">
            <Building2 className="mr-2 h-5 w-5" /> Valores
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-azul-primario mb-6">
            Valores Coorporativos
          </h2>
          <p className="max-w-xl mx-auto text-negro-suave">
            Estos principios fundamentales que guían nuestras decisiones y definen nuestra cultura empresarial.
          </p>
        </div>

        {/* Tarjetas de valores CON animación escalonada */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 transition-all duration-700">
            <ValueCard value={values[0]} />
          </div>
          <div className="md:col-span-4 transition-all duration-700">
            <ValueCard value={values[1]} />
          </div>
          <div className="md:col-span-4 transition-all duration-700">
            <ValueCard value={values[2]} />
          </div>
          <div className="md:col-span-2 hidden md:block"></div>
          <div className="md:col-span-4 transition-all duration-700">
            <ValueCard value={values[3]} />
          </div>
          <div className="md:col-span-4 transition-all duration-700">
            <ValueCard value={values[4]} />
          </div>
          <div className="md:col-span-2 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ value }) => {
  const Icon = value.icon;

  return (
    <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-1 group">
      <div className="p-6 h-full flex flex-col">
        <div className="mb-6 flex justify-center">
          <div className={`${value.color} p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <h3 className={`text-2xl font-bold text-center mb-4 ${value.textColor} transition-transform duration-300 group-hover:scale-105`}>
          {value.title}
        </h3>
        <p className="text-negro-suave text-sm text-center flex-grow">
          {value.description}
        </p>
        <div className="mt-4 mx-auto">
          <div className={`h-1 w-0 ${value.color} rounded-full group-hover:w-16 transition-all duration-500`}></div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
