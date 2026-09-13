"use client";

import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";

import animLanding from "@/assets/animaciones/Camb_Boton Landing_Hover.json";
import animWeb from "@/assets/animaciones/Camb_Boton Pagina web_Hover.json";
import animRedes from "@/assets/animaciones/Camb_Redes sociales_Hover.json";
import animVideo from "@/assets/animaciones/Camb_Video Animado_Hover.json";

const serviciosData = {
  landing: { 
    id: "landing", 
    titulo: "Creación de Landing Page", 
    price: "$239 + Mantenimiento y Host",
    priceHover: "Si ya posee host y dominio, el pago único es de $239.",
    colorFondo: "bg-[#5EBCD0]",
    animacion: animLanding
  },
  web: { 
    id: "web", 
    titulo: "Creación de página web", 
    price: "Desde $800 + Mantenimiento y Host",
    priceHover: "Si ya posee host y dominio, se hace un pago único.",
    colorFondo: "bg-[#87D69B]",
    animacion: animWeb
  },
  redes: { 
    id: "redes", 
    titulo: "Gestión de redes sociales", 
    price: "Desde $500 + Inversión en ADS",
    priceHover: "El presupuesto de ADS se define con el cliente.",
    colorFondo: "bg-[#B8AC9E]",
    animacion: animRedes
  },
  video: { 
    id: "video", 
    titulo: "Video corporativo animado", 
    price: "$300/minuto + 50$/formato adicional",
    priceHover: "Descuentos disponibles por más de 3 minutos.",
    colorFondo: "bg-[#F7F4EB]",
    animacion: animVideo
  }
};

export default function ServiciosPage() {
  const [vistaActiva, setVistaActiva] = useState("menu");
  const [hoverPrecio, setHoverPrecio] = useState(false);
  const contenidoActual = serviciosData[vistaActiva as keyof typeof serviciosData];

  return (
    <div className="w-full h-full flex flex-col items-center pt-8 md:pt-16 pb-20">

      {vistaActiva === "menu" ? (
        
        <div className="relative flex flex-col items-center w-full max-w-[850px] mt-6">
          <h1 className="absolute -top-[90px] md:-top-[110px] text-[100px] md:text-[150px] font-bold text-[#0B1B30] font-serif z-0 select-none tracking-tight" style={{ lineHeight: '0.7' }}>
            Servicios
          </h1>
          <div className="flex flex-col items-center w-full relative z-10 mt-10">
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
        
        <div className="flex flex-row w-full max-w-[1400px] mx-auto justify-between items-start px-4 md:px-12 lg:px-16 gap-8 md:gap-16 relative z-10 mt-6 md:mt-12">
          
          {/* Tarjeta de Información Izquierda */}
          <div className="flex-1 border-[4px] border-[#0B1B30] bg-[#FFF6E9] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[12px_12px_0_#0B1B30] flex flex-col transition-colors duration-300">
            
            {/* Cabecera Negra */}
            <div className="bg-[#0B1B30] w-full flex justify-center items-center h-[120px] md:h-[180px] lg:h-[220px] border-b-[4px] border-[#0B1B30] overflow-hidden relative">
               <div className="w-[500px] md:w-[700px] lg:w-[900px] absolute flex justify-center items-center">
                 <BotonLottieDetalle animacionData={contenidoActual.animacion} />
               </div>
            </div>
            
            {/* Cuerpo de la Tarjeta */}
            <div className="p-8 md:p-12 flex flex-col min-h-[350px]">
              
              {/* Caja Blanca Interactiva */}
              <div 
                className="bg-white border-[3px] border-[#0B1B30] rounded-2xl px-6 py-4 inline-flex items-center gap-4 w-fit shadow-[6px_6px_0_#0B1B30] cursor-pointer transition-all duration-300 hover:shadow-[2px_2px_0_#0B1B30] hover:translate-y-1 mb-8"
                onMouseEnter={() => setHoverPrecio(true)}
                onMouseLeave={() => setHoverPrecio(false)}
              >
                <span className="text-3xl md:text-4xl">👁️</span> 
                <span className="font-bold text-2xl md:text-3xl text-[#0B1B30]">{contenidoActual.price}</span>
              </div>
              
              {/* Aquí ocurre la magia de reemplazar el contenido */}
              {hoverPrecio ? (
                <div className="flex-1 flex items-center justify-center animate-pulse">
                  <p className="font-bold text-3xl md:text-5xl text-[#0B1B30] text-center max-w-[80%]">
                    {contenidoActual.priceHover}
                  </p>
                </div>
              ) : (
                <ul className="space-y-6 md:space-y-8 font-medium text-xl md:text-2xl lg:text-3xl text-[#0B1B30]">
                  <li className="flex items-center gap-4"><span>❋</span> Estructura One-Page.</li>
                  <li className="flex items-center gap-4"><span>❋</span> Redacción.</li>
                  <li className="flex items-center gap-4"><span>❋</span> Animación de logo.</li>
                  <li className="flex items-center gap-4"><span>❋</span> Implementación de etiquetas para la búsqueda.</li>
                </ul>
              )}
            </div>
          </div>

          {/* Menú Lateral Derecho (Botones puros sin tooltips HTML) */}
          <div className="flex flex-col items-center w-[200px] md:w-[320px] lg:w-[380px] pt-4 shrink-0">
            <button 
              onClick={() => { setVistaActiva("menu"); setHoverPrecio(false); }}
              className="text-[#0B1B30] hover:-translate-x-3 transition-transform cursor-pointer mb-6"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 md:w-20 md:h-20 drop-shadow-md">
                <path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/>
              </svg>
            </button>

            <div className="w-full flex flex-col items-center -space-y-[15%]">
              {Object.values(serviciosData).filter((s) => s.id !== vistaActiva).map((servicio) => (
                <BotonLottieSidebar
                  key={servicio.id}
                  animacionData={servicio.animacion}
                  onClick={() => { setVistaActiva(servicio.id); setHoverPrecio(false); }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 1. Botón Grande (Menú)
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

// 2. Botón Lateral (Revela la palabra nativa del Lottie)
function BotonLottieSidebar({ animacionData, onClick }: { animacionData: any, onClick: () => void }) {
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
      className="relative w-full aspect-[980/350] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 z-10 hover:z-20"
      onClick={onClick} onMouseEnter={() => animRef.current?.play()} onMouseLeave={() => animRef.current?.stop()}
    >
      <div ref={containerRef} className="w-full h-full pointer-events-none" />
    </div>
  );
}

// 3. Cabecera Fija
function BotonLottieDetalle({ animacionData }: { animacionData: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const anim = lottie.loadAnimation({
      container: containerRef.current, renderer: "svg", loop: true, autoplay: true, animationData: animacionData,
    });
    return () => anim.destroy();
  }, [animacionData]);
  return <div ref={containerRef} className="w-full h-full pointer-events-none" />;
}