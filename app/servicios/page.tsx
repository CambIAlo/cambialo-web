"use client";

import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";

import animLanding from "@/assets/animaciones/Camb_Boton Landing_Hover.json";
import animWeb from "@/assets/animaciones/Camb_Boton Pagina web_Hover.json";
import animRedes from "@/assets/animaciones/Camb_Redes sociales_Hover.json";
import animVideo from "@/assets/animaciones/Camb_Video Animado_Hover.json";
import animSeraphim from "@/assets/animaciones/Camb_Seraphim_Idel.json";

// 1. EL ASTERISCO (Tu SVG exacto)
const AsteriscoSVG = () => (
  <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-8 h-8 md:w-10 md:h-10 mt-0.5">
    <path d="M30.1152 1V13.6748L36.3252 4.75488L37.0078 3.77441L37.8525 4.61914L44.3809 11.1465L45.0879 11.8535L44.3809 12.5605L38.0576 18.8848H48V30.1152H38.0576L45.0879 37.1455L37.0078 45.2256L36.3252 44.2451L30.1152 35.3242V48H18.8848V35.3242L12.6738 44.2451L11.9912 45.2256L11.1465 44.3809L4.61914 37.8525L3.91211 37.1455L10.9424 30.1152H1V18.8848H10.9424L4.61914 12.5605L3.91211 11.8535L11.9912 3.77441L12.6738 4.75488L18.8848 13.6748V1H30.1152Z" fill="#FFF6E9" stroke="#0B1B30" strokeWidth="2"/>
  </svg>
);

// 2. LA FLECHA DE RETORNO (Tu SVG exacto)
const FlechaRetorno = () => (
  <svg width="80" height="65" viewBox="0 0 102 83" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[4px_4px_0_rgba(11,27,48,0.2)] hover:scale-105 transition-transform">
    <g clipPath="url(#clip0_132_818)">
      <path d="M77.7958 61.2653C63.9704 61.6823 50.0416 60.8996 36.2484 58.1346C29.3679 56.6912 22.5004 54.7987 15.8329 51.6809C12.5024 50.1156 9.21708 48.1718 6.16411 45.471C4.66022 44.0661 3.21442 42.4495 2.04616 40.4351C0.884354 38.4335 0.0517273 35.9508 9.14857e-05 33.3527C-0.0644532 30.7609 0.658448 28.2077 1.7428 26.1163C2.82715 24.0057 4.22132 22.2736 5.68648 20.7532C8.65554 17.815 11.9021 15.6275 15.2004 13.8184C21.8162 10.213 28.6838 7.8458 35.603 5.92765C49.4736 2.21325 63.6154 0.493971 77.7958 0V15.095C64.6223 14.6716 51.3131 15.4222 38.5204 17.9626C32.1627 19.2713 25.8825 21.0226 20.2865 23.608C17.4917 24.8846 14.9422 26.4435 12.9284 28.1692C11.9667 29.0417 11.1599 29.959 10.6112 30.8379C10.0626 31.7232 9.77861 32.538 9.72052 33.3527C9.66889 34.1738 9.83671 35.0463 10.3143 36.0278C10.7855 37.0029 11.5342 38.0294 12.4572 39.0237C14.3871 40.9868 16.9044 42.7895 19.6669 44.3099C25.2048 47.3763 31.4915 49.6088 37.8878 51.3923C50.7581 54.8821 64.2737 56.5693 77.8087 57.0569V61.2653H77.7958Z" fill="url(#paint0_linear_132_818)"/>
      <path d="M102 59.1612L53.5913 35.3223L64.0476 59.1612L53.5913 83.0001L102 59.1612Z" fill="#0B1B30"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear_132_818" x1="57.1219" y1="49.3971" x2="50.4221" y2="22.7546" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0B1B30"/><stop offset="1" stopColor="#63C3D1"/>
      </linearGradient>
      <clipPath id="clip0_132_818"><rect width="102" height="83" fill="white"/></clipPath>
    </defs>
  </svg>
);

// DICCIONARIO DE DATOS (Aquí controlas toda la información de las tarjetas)
const serviciosData = {
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
    colorBoton: "bg-[#5EBCD0]", // Celeste como en Figma
    animacion: animVideo,
    caracteristicas: [
      "Entrega previa de Storyboard.",
      "2 revisiones de Storyboard antes de iniciar la animación.",
      "Diseño de sonido."
    ]
  }
};

export default function ServiciosPage() {
  const [vistaActiva, setVistaActiva] = useState("menu");
  const [hoverPrecio, setHoverPrecio] = useState(false);
  const contenidoActual = serviciosData[vistaActiva as keyof typeof serviciosData];

  return (
    <div className="w-full h-full flex flex-col items-center pt-8 md:pt-16 pb-20">

      {vistaActiva === "menu" ? (
        
        // ================= VISTA: MENÚ PRINCIPAL =================
        <div className="flex flex-col items-center w-full max-w-[850px]">
          <h1 className="text-[100px] md:text-[150px] font-bold text-[#0B1B30] font-serif select-none tracking-tight leading-[0.8] mb-8">
            Servicios
          </h1>
          <div className="flex flex-col items-center w-full relative z-10">
            {Object.values(serviciosData).map((servicio, index) => (
              <BotonLottieMenu 
                key={servicio.id} 
                animacionData={servicio.animacion} 
                onClick={() => setVistaActiva(servicio.id)} 
                margenNegativo={index === 0 ? "mt-0" : "-mt-[60px] md:-mt-[100px] lg:-mt-[120px]"}
              />
            ))}
          </div>
        </div>

      ) : (
        
        // ================= VISTA: DETALLES DEL SERVICIO =================
        <div className="flex flex-col w-full max-w-[1400px] mx-auto items-center">
          
          <h1 className="text-[70px] md:text-[110px] font-bold text-[#0B1B30] font-serif select-none tracking-tight leading-[0.8] mb-10">
            Servicios
          </h1>
          
          <div className="flex flex-row w-full justify-between items-start px-4 md:px-12 lg:px-16 gap-8 md:gap-16 relative z-10">
            
            {/* TARJETA PRINCIPAL */}
            <div className={`flex-1 border-[4px] border-[#0B1B30] rounded-[32px] md:rounded-[40px] overflow-hidden flex flex-col transition-colors duration-300 ${hoverPrecio ? 'bg-[#0B1B30] shadow-[0_0_0_#0B1B30]' : `${contenidoActual.colorFondo} shadow-[12px_12px_0_#0B1B30]`}`}>
              
              {/* Cabecera Negra */}
              <div className="bg-[#0B1B30] w-full flex justify-center items-center py-6 md:py-10 border-b-[4px] border-[#0B1B30]">
                 <h2 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-center px-4">
                   {contenidoActual.titulo}
                 </h2>
              </div>
              
              {/* Cuerpo de la Tarjeta */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col min-h-[400px]">
                
                {hoverPrecio ? (

                  // --- ESTADO HOVER ---
                  <div className="flex items-stretch gap-x-4 w-full animate-in fade-in duration-300">
                    <span className="font-bold text-2xl md:text-4xl text-white pt-6 shrink-0 tracking-tight">
                      {contenidoActual.priceTexto}
                    </span>
                    <div 
                      className="bg-[#FFF6E9] border-[3px] border-[#0B1B30] p-6 md:p-10 flex flex-col items-start w-full cursor-pointer shadow-[6px_6px_0_#0B1B30]"
                      onMouseLeave={() => setHoverPrecio(false)}
                    >
                      <span className="font-bold text-3xl md:text-5xl text-[#0B1B30] tracking-tight">
                        {contenidoActual.priceBlancoHover}
                      </span>
                      <p className="font-medium text-xl md:text-3xl text-[#0B1B30] mt-4">
                        {contenidoActual.precioDescHover}
                      </p>
                      <div className="w-[180px] md:w-[250px] mt-6 mx-auto pointer-events-none">
                        <LottieNativoSimple animacionData={animSeraphim} />
                      </div>
                    </div>
                  </div>

                ) : (

                  // --- ESTADO NORMAL ---
                  <div className="flex flex-col items-start w-full animate-in fade-in duration-300">
                    <div className="flex items-center flex-wrap gap-x-2 gap-y-4 mb-8 md:mb-12">
                      <span className="font-bold text-2xl md:text-4xl text-[#0B1B30] tracking-tight">
                        {contenidoActual.priceTexto}
                      </span>
                      {/* Trigger dinámico con el color correspondiente */}
                      <span 
                        className={`${contenidoActual.colorBoton} border-[3px] border-[#0B1B30] px-4 md:px-6 py-2 font-bold text-2xl md:text-4xl text-[#0B1B30] cursor-pointer shadow-[4px_4px_0_#0B1B30] transition-transform hover:-translate-y-1 rounded-sm tracking-tight`}
                        onMouseEnter={() => setHoverPrecio(true)}
                      >
                        {contenidoActual.priceBlanco}
                      </span>
                    </div>
                    
                    {/* LISTA DINÁMICA DE CARACTERÍSTICAS */}
                    <ul className="space-y-6 md:space-y-8 font-medium text-xl md:text-2xl lg:text-[28px] text-[#0B1B30] leading-tight">
                      {contenidoActual.caracteristicas.map((caracteristica, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <AsteriscoSVG /> 
                          <span className="mt-1 md:mt-2">{caracteristica}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                )}
              </div>
            </div>

            {/* MENÚ LATERAL DERECHO */}
            <div className="flex flex-col items-center w-[120px] md:w-[200px] shrink-0 gap-8 md:gap-16 mt-4">
              
              <button onClick={() => { setVistaActiva("menu"); setHoverPrecio(false); }} className="cursor-pointer mb-2">
                <FlechaRetorno />
              </button>

              <div className="flex flex-col gap-10 md:gap-14 w-full items-center">
                {Object.values(serviciosData).filter((s) => s.id !== vistaActiva).map((servicio) => (
                  <BotonLottieSidebar
                    key={servicio.id}
                    animacionData={servicio.animacion}
                    colorFondo={servicio.colorFondo}
                    onClick={() => { setVistaActiva(servicio.id); setHoverPrecio(false); }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

// =======================================================================
// COMPONENTES MODULARES
// =======================================================================

function LottieNativoSimple({ animacionData }: { animacionData: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const anim = lottie.loadAnimation({ container: containerRef.current, renderer: "svg", loop: true, autoplay: true, animationData: animacionData });
    return () => anim.destroy();
  }, [animacionData]);
  return <div ref={containerRef} className="w-full h-full" />;
}

function BotonLottieMenu({ animacionData, onClick, margenNegativo }: { animacionData: any, onClick: () => void, margenNegativo: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    animRef.current = lottie.loadAnimation({
      container: containerRef.current, renderer: "svg", loop: true, autoplay: false, animationData: animacionData,
    });
    return () => animRef.current?.destroy();
  }, [animacionData]);

  return (
    <div 
      className={`relative w-full max-w-[850px] aspect-[980/350] flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer z-10 hover:z-20 ${margenNegativo}`}
      onClick={onClick} onMouseEnter={() => animRef.current?.play()} onMouseLeave={() => animRef.current?.stop()} 
    >
      <div ref={containerRef} className="w-full h-full pointer-events-none" />
    </div>
  );
}

function BotonLottieSidebar({ animacionData, colorFondo, onClick }: { animacionData: any, colorFondo: string, onClick: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    animRef.current = lottie.loadAnimation({
      container: containerRef.current, renderer: "svg", loop: true, autoplay: false, animationData: animacionData,
    });
    return () => animRef.current?.destroy();
  }, [animacionData]);

  return (
    <div 
      className="group relative w-full max-w-[140px] md:max-w-[180px] h-[35px] md:h-[45px] flex items-center justify-center cursor-pointer z-10 hover:z-50"
      onClick={onClick} onMouseEnter={() => animRef.current?.play()} onMouseLeave={() => animRef.current?.stop()}
    >
      <div className={`absolute inset-0 border-[3px] border-[#0B1B30] rounded-full shadow-[0_4px_0_#0B1B30] transition-opacity duration-200 group-hover:opacity-0 ${colorFondo}`} />
      
      <div className="absolute w-[450px] md:w-[650px] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 scale-[0.3] group-hover:scale-[0.9] origin-center flex items-center justify-center">
        <div ref={containerRef} className="w-full h-full" />
      </div>
    </div>
  );
}