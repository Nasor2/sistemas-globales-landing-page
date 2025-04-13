import AvCrisantoLuque from "../assets/images/locationsScreens/AvCrisantoLuque.png";
import Bazurto from "../assets/images/locationsScreens/Bazurto.png";
import CCPaseoDeLaCastellana from "../assets/images/locationsScreens/CCPaseoDeLaCastellana.png";
import CCPaseoDeLaCastellanaCollage from "../assets/images/locationsScreens/CCPaseoDelaCastellanaCollage.png";
import ElCoreano from "../assets/images/locationsScreens/ElCoreano.png";
import LosEjecutivos from "../assets/images/locationsScreens/LosEjecutivos.jpg";
import RondaReal from "../assets/images/locationsScreens/RondaReal.png";
import Turbaco from "../assets/images/locationsScreens/Turbaco.png";


const dmsToDecimal = (dms) => {
    if (typeof dms === "number") return dms;
    
    const parts = dms.split(/[^\d\w\.]+/);
    const degrees = parseFloat(parts[0]);
    const minutes = parseFloat(parts[1]);
    const seconds = parseFloat(parts[2]);
    let direction = dms.slice(-1);
    
    let decimal = degrees + minutes/60 + seconds/3600;
    
    if (direction === "S" || direction === "W") {
      decimal = -decimal;
    }
    
    return decimal;
  };
 export const screens = [
    {
      id: 1,
      name: "El Coreano",
      coordinates: ["10°23'27.4\"N", "75°29'20.2\"W"],
      decimal: [dmsToDecimal("10°23'27.4\"N"), dmsToDecimal("75°29'20.2\"W")],
      address: "Barrio El Coreano, Cartagena",
      dimensions: "6m x 3m",
      resolution: "Alta definición P4",
      traffic: "Alto tráfico peatonal y vehicular",
      views: "~25,000 diarios",
      colorCode: "blue",
      // Agrega un arreglo de imágenes para cada pantalla
      images: [
        ElCoreano,
      ]
    },
    {
      id: 2,
      name: "Los Ejecutivos",
      coordinates: ["10°23'56.7\"N", "75°29'37.3\"W"],
      decimal: [dmsToDecimal("10°23'56.7\"N"), dmsToDecimal("75°29'37.3\"W")],
      address: "Barrio Los Ejecutivos, Cartagena",
      dimensions: "8m x 4m",
      resolution: "Alta definición P3",
      traffic: "Alto tráfico vehicular",
      views: "~30,000 diarios",
      colorCode: "red",
      images: [
        LosEjecutivos,
      ]
    },
    {
      id: 3,
      name: "Ronda Real",
      coordinates: ["10°23'38.2\"N", "75°28'52.5\"W"],
      decimal: [dmsToDecimal("10°23'38.2\"N"), dmsToDecimal("75°28'52.5\"W")],
      address: "Ronda Real, Cartagena",
      dimensions: "5m x 3m",
      resolution: "Alta definición P5",
      traffic: "Medio tráfico peatonal y vehicular",
      views: "~20,000 diarios",
      colorCode: "green",
      images: [
        RondaReal,
      ]
    },
    {
      id: 4,
      name: "Turbaco",
      coordinates: ["10°21'18.2\"N", "75°26'32.6\"W"],
      decimal: [dmsToDecimal("10°21'18.2\"N"), dmsToDecimal("75°26'32.6\"W")],
      address: "Turbaco, Cartagena",
      dimensions: "10m x 5m",
      resolution: "Ultra HD P2",
      traffic: "Alto tráfico vehicular",
      views: "~35,000 diarios",
      colorCode: "purple",
      images: [
        Turbaco,
      ]
    },
    {
      id: 5,
      name: "Crisanto Luque",
      coordinates: ["10°24'16.2\"N", "75°31'12.8\"W"],
      decimal: [dmsToDecimal("10°24'16.2\"N"), dmsToDecimal("75°31'12.8\"W")],
      address: "Avenida Crisanto Luque, Cartagena",
      dimensions: "7m x 4m",
      resolution: "Alta definición P4",
      traffic: "Alto tráfico peatonal y vehicular",
      views: "~28,000 diarios",
      colorCode: "orange",
      images: [
        AvCrisantoLuque,
      ]
    },
    {
      id: 6,
      name: "Bazurto",
      coordinates: ["10°24'43.5\"N", "75°31'17.6\"W"],
      decimal: [dmsToDecimal("10°24'43.5\"N"), dmsToDecimal("75°31'17.6\"W")],
      address: "Mercado de Bazurto, Cartagena",
      dimensions: "6m x 3m",
      resolution: "Alta definición P4",
      traffic: "Muy alto tráfico peatonal",
      views: "~40,000 diarios",
      colorCode: "yellow",
      images: [
        Bazurto,
      ]
    },
    {
      id: 7,
      name: "Centro Comercial La Castellana",
      coordinates: [10.3918, -75.4879],
      decimal: [10.3918, -75.4879],
      address: "C.C. La Castellana, Cartagena",
      dimensions: "5m x 3m",
      resolution: "Alta definición P4",
      traffic: "Alto tráfico peatonal",
      views: "~22,000 diarios",
      colorCode: "pink",
      images: [
        CCPaseoDeLaCastellana,
        CCPaseoDeLaCastellanaCollage,
      ]
    }
  ];
