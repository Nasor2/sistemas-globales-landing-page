import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapPin, Maximize, X, Monitor, ChevronLeft, ChevronRight } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { screens } from "../../data/locationsData";

// Arreglar el ícono por defecto
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LocationsSection = () => {
  const [selectedScreen, setSelectedScreen] = useState(null);
  const [mapPosition, setMapPosition] = useState([10.3972, -75.4847]); // Centro de Cartagena
  const [isMobile, setIsMobile] = useState(false);
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  // Estado para controlar la imagen actual en el carrusel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  

  // Resetear el índice de imagen cuando se selecciona una nueva pantalla
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedScreen]);

  const handleScreenClick = (screen) => {
    setSelectedScreen(screen);
    if (isMobile) {
      setIsMapFullscreen(false);
    }
  };

  const toggleMapFullscreen = () => {
    setIsMapFullscreen(!isMapFullscreen);
  };

  const closeScreenInfo = () => {
    setSelectedScreen(null);
  };

  // Función para navegar entre imágenes
  const navigateImages = (direction) => {
    if (!selectedScreen || !selectedScreen.images || selectedScreen.images.length <= 1) return;
    
    if (direction === 'next') {
      setCurrentImageIndex(prevIndex => 
        prevIndex === selectedScreen.images.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentImageIndex(prevIndex => 
        prevIndex === 0 ? selectedScreen.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section id="ubicaciones" className="relative pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="flex justify-center">
            <span className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full inline-flex items-center mb-4">
              <MapPin className="mr-2 h-5 w-5" /> Ubicaciones
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-azul-primario max-w-2xl mx-auto leading-tight">
            Nuestras Pantallas Publicitarias
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Estratégicamente ubicadas en los puntos de mayor tráfico de
            Cartagena para maximizar la visibilidad de tu marca
          </p>
        </div>

        {/* Responsive Layout Container */}
        <div
          className={`flex flex-col ${!isMobile ? "md:flex-row" : ""} gap-6`}
        >
          {/* Map Section - Full Width on Mobile or Right Side on Desktop */}
          <div
            className={`${selectedScreen && !isMapFullscreen && isMobile ? "hidden" : "block"} 
                          ${!isMobile ? (selectedScreen ? "md:w-1/2" : "w-full") : "w-full"} 
                          bg-white rounded-2xl shadow-xl overflow-hidden relative h-96 md:h-[600px]`}
          >
            <div className="absolute top-2 right-2 z-50">
              <button
                onClick={toggleMapFullscreen}
                className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
              >
                <Maximize className="h-5 w-5 text-blue-600" />
              </button>
            </div>

            <MapContainer
              center={mapPosition}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
              zoomControl={false}
            >
              <TileLayer
                attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />

              {screens.map((screen) => (
                <Marker
                  key={screen.id}
                  position={screen.decimal}
                  eventHandlers={{
                    click: () => handleScreenClick(screen),
                  }}
                >
                  <Popup>
                    <div className="font-medium">{screen.name}</div>
                    <div className="text-sm text-gray-600">
                      {screen.address}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Screen Info Section - Full Width on Mobile or Left Side on Desktop when a screen is selected */}
          {selectedScreen && (
            <div
              className={`${isMapFullscreen && isMobile ? "hidden" : "block"} 
                ${!isMobile ? "md:w-1/2" : "w-full"} 
                bg-white rounded-2xl shadow-xl overflow-hidden relative`}
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={closeScreenInfo}
                  className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <X className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              {/* Screen Image Carousel */}
              <div className="relative h-64 md:h-96 bg-gradient-to-r from-blue-600 to-azul-primario">
                {/* Imagen actual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={selectedScreen.images && selectedScreen.images.length > 0 
                      ? selectedScreen.images[currentImageIndex] 
                      : "/api/placeholder/800/600"}
                    alt={`Vista de ${selectedScreen.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-30"></div>
                  
                  {/* Indicadores de imágenes */}
                  {selectedScreen.images && selectedScreen.images.length > 1 && (
                    <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
                      {selectedScreen.images.map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                          aria-label={`Ver imagen ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                  
                  {/* Botones de navegación */}
                  {selectedScreen.images && selectedScreen.images.length > 1 && (
                    <>
                      <button 
                        onClick={() => navigateImages('prev')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 rounded-full p-1 text-white hover:bg-opacity-60 transition-all"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button 
                        onClick={() => navigateImages('next')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 rounded-full p-1 text-white hover:bg-opacity-60 transition-all"
                        aria-label="Imagen siguiente"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-white text-2xl md:text-3xl font-bold">
                      {selectedScreen.name}
                    </h3>
                    <p className="text-white text-sm md:text-base mt-1 opacity-90">
                      {selectedScreen.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Screen Details - Simplified */}
              <div className="p-6">
                <div className="space-y-5">
                  {/* Ubicación Section */}
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-center mb-3">
                      <div className="p-1.5 bg-blue-100 rounded-lg mr-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                      </div>
                      <h4 className="font-medium text-gray-800">Ubicación</h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      {selectedScreen.address}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Sector de alto impacto
                    </p>
                  </div>

                  {/* Información de Tráfico */}
                  <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <div className="flex items-center mb-3">
                      <div className="p-1.5 bg-green-100 rounded-lg mr-2">
                        <Monitor className="h-4 w-4 text-green-600" />
                      </div>
                      <h4 className="font-medium text-gray-800">
                        Información de tráfico
                      </h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Tipo de tráfico:</span>{" "}
                      {selectedScreen.traffic}
                    </p>
                  </div>
                </div>

                {/* CTA Button with WhatsApp Link */}
                <div className="mt-6">
                  <a
                    href={`https://wa.me/+573002433252?text=Hola,%20estoy%20interesado%20en%20obtener%20información%20sobre%20la%20pantalla%20${encodeURIComponent(selectedScreen.name)}%20ubicada%20en%20${encodeURIComponent(selectedScreen.address)}.%20¿Podrían%20proporcionarme%20más%20detalles%20y%20una%20cotización?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:bg-green-700 flex items-center justify-center shadow"
                  >
                    <span>Solicitar cotización por WhatsApp</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Instructions Panel - Shown when no screen is selected */}
          {!selectedScreen  && (
            <div className="md:w-1/2 bg-white rounded-2xl shadow-xl overflow-hidden flex items-center justify-center p-8">
              <div className="text-center space-y-4 max-w-md">
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Explora nuestras ubicaciones
                </h3>
                <p className="text-gray-600">
                  Haz clic en cualquier marcador del mapa para ver los detalles
                  de nuestras pantallas publicitarias estratégicamente ubicadas
                  en Cartagena.
                </p>
                <div className="py-4 px-6 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-blue-700">Dato:</span>{" "}
                    Contamos con varias pantallas en los puntos de mayor tráfico de
                    la ciudad, ideales para maximizar la visibilidad de tu
                    marca.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        
      </div>
    </section>
  );
};

export default LocationsSection;