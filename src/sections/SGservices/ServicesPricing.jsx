import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';

const ServicesPricing = () => {
  // State for table filter
  const [activeTable, setActiveTable] = useState("table2"); // table1 or table2
  const [screenFilter, setScreenFilter] = useState("all"); // all, or specific screen numbers

  // First pricing table (7-12 months)
  const pricingTable1 = [
    { screens: 1, month7: 12754013, month8: 11923244, month9: 12792475, month10: 13892475, month11: 14992475, month12: 16092475 },
    { screens: 2, month7: 19312821, month8: 21730403, month9: 24147985, month10: 26243223, month11: 28338462, month12: 30433700 },
    { screens: 3, month7: 26427750, month8: 31986341, month9: 35544932, month10: 38520004, month11: 41721158, month12: 44797268 },
    { screens: 4, month7: 35266890, month8: 39881605, month9: 44096321, month10: 47922408, month11: 51748495, month12: 55574582 },
    { screens: 5, month7: 44063612, month8: 49002007, month9: 55120401, month10: 59903010, month11: 64685619, month12: 69468227 },
    { screens: 6, month7: 52900334, month8: 59522408, month9: 66144482, month10: 71883612, month11: 77622742, month12: 83361873 },
    { screens: 7, month7: 61717057, month8: 69442809, month9: 77168562, month10: 83864214, month11: 90559866, month12: 97255518 }
  ];

  // Second pricing table (1-6 months)
  const pricingTable2 = [
    { screens: 1, month1: 1650000, month2: 3300000, month3: 4800000, month4: 6234783, month5: 7609783, month6: 8984783 },
    { screens: 2, month1: 3147857, month2: 6295714, month3: 9142857, month4: 11637143, month5: 14276190, month6: 16895238 },
    { screens: 3, month1: 4626168, month2: 9252336, month3: 13457944, month4: 17158879, month5: 21014019, month6: 24869159 },
    { screens: 4, month1: 5739130, month2: 11478261, month3: 16695652, month4: 21304348, month5: 26086957, month6: 30852174 },
    { screens: 5, month1: 7173913, month2: 14347826, month3: 20869565, month4: 26608696, month5: 32586957, month6: 38565217 },
    { screens: 6, month1: 8608696, month2: 17217391, month3: 25043478, month4: 31930435, month5: 39104348, month6: 46278261 },
    { screens: 7, month1: 10043478, month2: 20086957, month3: 29217391, month4: 37252174, month5: 45621739, month6: 53991304 }
  ];

  // Function to filter pricing based on number of screens
  const filterPricingByScreens = (data) => {
    if (screenFilter === "all") return data;
    return data.filter(row => row.screens === parseInt(screenFilter));
  };

  // Format price with commas and $ sign
  const formatPrice = (price) => {
    return `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  };

  // Get column headers based on active table
  const getColumnHeaders = () => {
    if (activeTable === "table1") {
      return [
        { key: "screens", label: "Número de pantallas" },
        { key: "month7", label: "7 MES" },
        { key: "month8", label: "8 MES" },
        { key: "month9", label: "9 MES" },
        { key: "month10", label: "10 MES" },
        { key: "month11", label: "11 MES" },
        { key: "month12", label: "12 MES" }
      ];
    } else {
      return [
        { key: "screens", label: "Número de pantallas" },
        { key: "month1", label: "1 MES" },
        { key: "month2", label: "2 MES" },
        { key: "month3", label: "3 MES" },
        { key: "month4", label: "4 MES" },
        { key: "month5", label: "5 MES" },
        { key: "month6", label: "6 MES" }
      ];
    }
  };

  // Get unique screen numbers for dropdown
  const screenOptions = Array.from(new Set([
    ...pricingTable1.map(item => item.screens),
    ...pricingTable2.map(item => item.screens)
  ])).sort((a, b) => a - b);

  return (
    <section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
      {/* Subtle divider with text instead of red border */}
      <div className="w-full max-w-full mx-auto px-4 md:px-8 lg:px-16 xl:max-w-6xl">
        <div className="flex items-center mb-8">
          <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center">
            <span className="text-blue-800 font-medium text-sm">Nuestros Precios</span>
          </div>
          <div className="h-1 bg-gradient-to-r from-red-500 flex-1 ml-4"></div>
        </div>
        
        {/* Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-red-500">Tarifas</span>{" "}
            <span className="text-azul-primario">Sistemas Globales</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Consulta nuestras tarifas según el número de pantallas y el período de contratación.
          </p>
        </motion.div>

        {/* Table Toggle Buttons */}
        <motion.div 
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button 
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTable === "table2" 
                ? "bg-red-500 text-white shadow-lg shadow-red-500/30" 
                : "bg-white text-red-500 border-2 border-red-500"
            }`}
            onClick={() => setActiveTable("table2")}
          >
            Meses 1-6
          </button>
          <button 
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTable === "table1" 
                ? "bg-red-500 text-white shadow-lg shadow-red-500/30" 
                : "bg-white text-red-500 border-2 border-red-500"
            }`}
            onClick={() => setActiveTable("table1")}
          >
            Meses 7-12
          </button>
        </motion.div>

        {/* Screen Number Filter */}
        <motion.div 
          className="flex justify-center items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-azul-primario font-medium">Filtrar por:</span>
          <div className="relative">
            <select
              value={screenFilter}
              onChange={(e) => setScreenFilter(e.target.value)}
              className="appearance-none bg-white border-2 border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:border-red-500 cursor-pointer"
            >
              <option value="all">Todas las pantallas</option>
              {screenOptions.map(screenNum => (
                <option key={screenNum} value={screenNum}>
                  {screenNum} {screenNum === 1 ? 'Pantalla' : 'Pantallas'}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Pricing Table */}
        <motion.div 
          className="overflow-x-auto shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-azul-primario text-white">
                {getColumnHeaders().map((column) => (
                  <th key={column.key} className="py-4 px-2 text-center text-sm lg:text-base font-semibold">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filterPricingByScreens(activeTable === "table1" ? pricingTable1 : pricingTable2).map((row, index) => (
                <motion.tr 
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.05)" }}
                >
                  {getColumnHeaders().map((column) => (
                    <td key={column.key} className="py-3 px-2 text-center border-b border-gray-200">
                      {column.key === "screens" ? (
                        <span className="font-medium">{row[column.key]}</span>
                      ) : (
                        <motion.span
                          className="text-sm lg:text-base"
                          whileHover={{ scale: 1.05, color: "#ef4444" }}
                        >
                          {formatPrice(row[column.key])}
                        </motion.span>
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="bg-red-500 text-white px-8 py-4 rounded-lg font-medium shadow-lg shadow-red-500/30 hover:bg-red-600 transition-all">
            Solicitar Presupuesto Personalizado
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            *Los precios no incluyen IVA. Consulte por descuentos en contratos anuales.
          </p>
        </motion.div>
        
        {/* Logo at bottom right */}
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

export default ServicesPricing;