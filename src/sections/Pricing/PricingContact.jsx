import React from "react";
import { HashLink } from "react-router-hash-link";
import {
  ArrowRight,
  Send,
  MapPin,
  Phone,
  Coins,
  TvMinimal,
  Check,
  ChevronRight,
  Eye,
  Users,
  FileText,
  Clock,
  TrendingUp,
  BarChart,
  Shield,
  Target,
  Zap
} from "lucide-react";
import fondocard from "../../assets/images/fondo-pricing-section.png";

const PricingContact = () => {
  return (
    <div className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">

      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-8 md:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <span className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full inline-flex items-center mb-4 ">
                <Coins className="mr-2 h-5 w-5" /> Cotiza
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-azul-primario max-w-2xl mx-auto leading-tight">
              Soluciones personalizadas para tu marca
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              Ofrecemos propuestas adaptadas a tus necesidades y presupuesto para
              maximizar el impacto de tu publicidad exterior
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Featured Card */}
            <div className="relative col-span-1 md:row-span-1 bg-gradient-to-br from-azul-primario via-blue-600 to-blue-700 text-white rounded-2xl shadow-xl overflow-hidden h-full transform transition-transform hover:scale-[1.02] duration-300">
              {/* Background Image */}
              <div
                className="absolute -bottom-8 -right-10 w-full h-11/12 opacity-40"
                style={{
                  backgroundImage: `url(${fondocard})`,
                  backgroundSize: "contain",
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  zIndex: 0,
                }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                <div className="space-y-4">
                 
                  <h3 className="text-xl md:text-2xl font-bold">Destaca tu marca</h3>
                  <h4 className="text-2xl md:text-3xl font-bold leading-tight">Con Sistemas Globales</h4>
                  <p className="text-blue-100 text-base">
                    Solicita una cotización personalizada y obtén la mejor propuesta
                    para tu campaña.
                  </p>
                </div>
                
                <div className="pt-6 mt-4">
                  <HashLink smooth to="/#contacto">
                    <button className="flex items-center justify-center space-x-2 bg-white text-azul-primario px-5 py-3 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg w-full">
                      <span>Cotizar ahora</span>
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </button>
                  </HashLink>
                </div>
              </div>
            </div>

            {/* Digital Screens Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full overflow-hidden border-t-4 border-blue-700">
              {/* Card Header */}
              <div className="px-6 pt-6 pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="p-2.5 bg-blue-500 rounded-xl mr-3 text-white">
                      <TvMinimal className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Pantallas Digitales
                      </h3>
                      <p className="text-blue-600 text-sm font-medium">Publicidad de alto impacto</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                  Profesional
                  </div>
                </div>
              </div>
              
              {/* Stats section */}
              <div className="px-6 py-3">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="flex items-center mb-1.5">
                      <div className="p-1.5 bg-blue-100 rounded-lg mr-2">
                        <Eye className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="text-lg font-bold text-gray-800">98%</p>
                    </div>
                    <p className="text-xs text-gray-600">Visibilidad efectiva</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="flex items-center mb-1.5">
                      <div className="p-1.5 bg-green-100 rounded-lg mr-2">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-lg font-bold text-gray-800">50K+</p>
                    </div>
                    <p className="text-xs text-gray-600">Alcance de personas</p>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-3 mb-4">
                  <h4 className="text-base font-medium text-gray-800 flex items-center">
                    <Shield className="mr-1.5 h-4 w-4 text-blue-500" />
                    Beneficios exclusivos
                  </h4>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start p-2 rounded-lg bg-blue-50 border border-blue-100">
                      <Target className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Ubicaciones estratégicas en zonas de alto tráfico
                      </span>
                    </li>
                    
                    <li className="flex items-start p-2 rounded-lg bg-green-50 border border-green-100">
                      <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Estadísticas detalladas para optimizar tu inversión
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Call to action area */}
              <div className="mt-auto px-6 pb-6">
                <div className="p-3 rounded-xl bg-blue-50 mb-4 flex items-center border border-blue-100">
                  <FileText className="mr-2 h-4 w-4 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium">Cotización detallada</p>
                    <p className="text-xs text-gray-600">Respuesta en 24h</p>
                  </div>
                </div>
                
                <HashLink smooth to="/#contacto" className="block">
                  <button className="w-full group bg-gradient-to-r from-rojo-primario to-red-600 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:bg-red-500 flex items-center justify-center shadow">
                    <span>Solicitar cotización</span>
                    <ChevronRight className="ml-1.5 h-4 w-4" />
                  </button>
                </HashLink>
              </div>
            </div>

            {/* Billboards Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full overflow-hidden border-t-4 border-rojo-primario">
              {/* Card Header */}
              <div className="px-6 pt-6 pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="p-2.5 bg-rojo-primario rounded-xl mr-3 text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Vallas Publicitarias
                      </h3>
                      <p className="text-red-600 text-sm font-medium">Máxima visibilidad urbana</p>
                    </div>
                  </div>
                  <div className="bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    Destacado
                  </div>
                </div>
              </div>
              
              {/* Stats section */}
              <div className="px-6 py-3">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="flex items-center mb-1.5">
                      <div className="p-1.5 bg-red-100 rounded-lg mr-2">
                        <Eye className="h-4 w-4 text-red-600" />
                      </div>
                      <p className="text-lg font-bold text-gray-800">100%</p>
                    </div>
                    <p className="text-xs text-gray-600">Impacto continuo</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="flex items-center mb-1.5">
                      <div className="p-1.5 bg-green-100 rounded-lg mr-2">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-lg font-bold text-gray-800">Efectivo</p>
                    </div>
                    <p className="text-xs text-gray-600">Recordación efectiva</p>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-3 mb-4">
                  <h4 className="text-base font-medium text-gray-800 flex items-center">
                    <Shield className="mr-1.5 h-4 w-4 text-red-500" />
                    Ventajas competitivas
                  </h4>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start p-2 rounded-lg bg-red-50 border border-red-100">
                      <Target className="h-4 w-4 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Pantallas LED de alta definición y visibilidad excepcional
                      </span>
                    </li>
                    
                    <li className="flex items-start p-2 rounded-lg bg-green-50 border border-green-100">
                      <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Alcance diario de más de 50K personas en zonas estratégicas
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Call to action area */}
              <div className="mt-auto px-6 pb-6">
                <div className="p-3 rounded-xl bg-red-50 mb-4 flex items-center border border-red-100">
                  <Phone className="mr-2 h-4 w-4 text-red-600" />
                  <div>
                    <p className="text-sm font-medium">Asesoría personalizada</p>
                    <p className="text-xs text-gray-600">Expertos a tu servicio</p>
                  </div>
                </div>
                
                <HashLink smooth to="/#contacto" className="block">
                  <button className="w-full group bg-gradient-to-r from-rojo-primario to-red-600 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:bg-red-500 flex items-center justify-center shadow">
                    <span>Solicitar información</span>
                    <ChevronRight className="ml-1.5 h-4 w-4" />
                  </button>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingContact;