import animLanding from "@/assets/animaciones/Camb_Boton Landing_Hover.json";
import animWeb from "@/assets/animaciones/Camb_Boton Pagina web_Hover.json";
import animRedes from "@/assets/animaciones/Camb_Redes sociales_Hover.json";
import animVideo from "@/assets/animaciones/Camb_Video Animado_Hover.json";

export const serviciosData = {
  landing: { 
    id: "landing", 
    titulo: "Creación de Landing Page", 
    priceTexto: "$239 + ",
    priceBlanco: "Mantenimiento y Host",
    priceBlancoHover: "11,99/mes",
    precioDescHover: "Si ya posee host y dominio, el pago único es de $239.",
    colorFondo: "bg-[#5EBCD0]", 
    colorBoton: "bg-[#FFF6E9]",
    animacion: animLanding,
    caracteristicas: [
      "Estructura One-Page.",
      "Redacción.",
      "Animación de logo.",
      "Implementación de etiquetas para la búsqueda."
    ]
  },
  web: { 
    id: "web", 
    titulo: "Creación de página web", 
    priceTexto: "Desde $800 + ",
    priceBlanco: "Mantenimiento y Host",
    priceBlancoHover: "11,99/mes",
    precioDescHover: "Si ya posee host y dominio, se hace un pago único.",
    colorFondo: "bg-[#4ade80]",
    colorBoton: "bg-[#FFF6E9]",
    animacion: animWeb,
    caracteristicas: [
      "El precio final se establece en una reunión con el cliente.",
      "Interacción con base de datos.",
      "Sistema de iconos animados.",
      "Implementación de etiquetas para la búsqueda."
    ]
  },
  redes: { 
    id: "redes", 
    titulo: "Gestión de redes sociales", 
    priceTexto: "Desde $500 + ",
    priceBlanco: "Inversión en ADS",
    priceBlancoHover: "Desde $500 /mes",
    precioDescHover: "El presupuesto de ADS se define con el cliente.",
    colorFondo: "bg-[#B8AC9E]",
    colorBoton: "bg-[#FFF6E9]",
    animacion: animRedes,
    caracteristicas: [
      "Diseño de estrategia de contenidos.",
      "Creación de diseño y redacción de guiones.",
      "Publicación de contenido y monitoreo de resultados.",
      "Configuración y asesoría de campañas de ADS."
    ]
  },
  video: { 
    id: "video", 
    titulo: "Video corporativo animado", 
    priceTexto: "$300/minuto + ",
    priceBlanco: "50$/formato adicional",
    priceBlancoHover: "$300 por minuto",
    precioDescHover: "Descuentos disponibles por más de 3 minutos.",
    colorFondo: "bg-[#FFF6E9]",
    colorBoton: "bg-[#5EBCD0]",
    animacion: animVideo,
    caracteristicas: [
      "Entrega previa de Storyboard.",
      "2 revisiones de Storyboard antes de iniciar la animación.",
      "Diseño de sonido."
    ]
  }
};