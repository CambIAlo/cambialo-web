"use client";

import { useState } from "react";
import { serviciosData } from "@/constants/serviciosData";
import { AsteriscoSVG, FlechaRetorno } from "@/components/icons";
import { BotonLottieMenu, BotonLottieSidebar, LottieNativoSimple } from "@/components/LottieAnimators";
import animSeraphim from "@/assets/animaciones/Camb_Seraphim_Idel.json";

export default function ServiciosPage() {
  const [vistaActiva, setVistaActiva] = useState("menu");
  const [hoverPrecio, setHoverPrecio] = useState(false);
  const contenidoActual = serviciosData[vistaActiva as keyof typeof serviciosData];

  return (
    <div className="w-full h-full flex flex-col items-center pt-8 md:pt-16 pb-20 overflow-x-hidden">

      {vistaActiva === "menu" ? (
        
        // ================= VISTA: MENÚ PRINCIPAL =================
        <div className="flex flex-col items-center w-full max-w-[850px] px-4">
          {/* TÍTULO FLUIDO: text-[14vw] en móvil (escala con la pantalla), luego tamaños fijos en tablet/PC */}
          <h1 className="w-full text-center text-[14vw] sm:text-[75px] md:text-[110px] lg:text-[150px] font-['Instrument_Serif'] font-normal not-italic text-[#0B1B30] select-none tracking-tight leading-[0.8] mb-8">
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
          
          {/* TÍTULO FLUIDO DETALLE: text-[12vw] en móvil */}
          <h1 className="w-full text-center text-[12vw] sm:text-[60px] md:text-[90px] lg:text-[110px] font-['Instrument_Serif'] font-normal not-italic text-[#0B1B30] select-none tracking-tight leading-[0.8] mb-6 md:mb-10">
            Servicios
          </h1>
          
          <div className="flex flex-col lg:flex-row w-full justify-between items-center lg:items-start px-4 md:px-12 lg:px-16 gap-8 md:gap-16 relative z-10">
            
            {/* TARJETA PRINCIPAL */}
            <div className={`w-full lg:flex-1 border-[4px] border-[#0B1B30] rounded-[32px] md:rounded-[40px] overflow-hidden flex flex-col transition-colors duration-300 ${hoverPrecio ? 'bg-[#0B1B30] shadow-[0_0_0_#0B1B30]' : `${contenidoActual.colorFondo} shadow-[12px_12px_0_#0B1B30]`}`}>
              
              <div className="bg-[#0B1B30] w-full flex justify-center items-center py-6 md:py-10 border-b-[4px] border-[#0B1B30]">
                 <h2 className="text-white font-['Instrument_Serif'] font-normal not-italic text-3xl md:text-5xl lg:text-6xl tracking-tight text-center px-4">
                   {contenidoActual.titulo}
                 </h2>
              </div>
              
              <div className="p-6 md:p-12 lg:p-16 flex flex-col min-h-[400px]">
                
                {hoverPrecio ? (
                  // --- ESTADO HOVER / EXPANDIDO ---
                  <div className="flex items-stretch gap-x-4 w-full animate-in fade-in duration-300 flex-col lg:flex-row">
                    <span className="font-['Instrument_Serif'] font-normal not-italic text-2xl md:text-4xl text-white pt-2 md:pt-6 shrink-0 tracking-tight mb-4 lg:mb-0">
                      {contenidoActual.priceTexto}
                    </span>
                    <div 
                      className="relative bg-[#FFF6E9] border-[3px] border-[#0B1B30] p-6 md:p-10 flex flex-col items-start w-full cursor-pointer shadow-[6px_6px_0_#0B1B30]"
                      onMouseLeave={() => setHoverPrecio(false)}
                      onClick={() => setHoverPrecio(false)}
                    >
                      <span className="lg:hidden absolute top-4 right-5 text-[#0B1B30] font-sans font-bold opacity-30 text-xl">✕</span>
                      <span className="font-['Instrument_Serif'] font-normal not-italic text-3xl md:text-5xl text-[#0B1B30] tracking-tight pr-6">
                        {contenidoActual.priceBlancoHover}
                      </span>
                      <p className="font-['Instrument_Serif'] font-normal not-italic text-xl md:text-3xl text-[#0B1B30] mt-4">
                        {contenidoActual.precioDescHover}
                      </p>
                      <div className="w-[150px] md:w-[250px] mt-6 mx-auto pointer-events-none">
                        <LottieNativoSimple animacionData={animSeraphim} />
                      </div>
                    </div>
                  </div>
                ) : (
                  // --- ESTADO NORMAL ---
                  <div className="flex flex-col items-start w-full animate-in fade-in duration-300">
                    <div className="flex items-center flex-wrap gap-x-2 gap-y-4 mb-8 md:mb-12">
                      <span className="font-['Instrument_Serif'] font-normal not-italic text-2xl md:text-4xl text-[#0B1B30] tracking-tight">
                        {contenidoActual.priceTexto}
                      </span>
                      <span 
                        className={`${contenidoActual.colorBoton} border-[3px] border-[#0B1B30] px-4 md:px-6 py-2 font-['Instrument_Serif'] font-normal not-italic text-2xl md:text-4xl text-[#0B1B30] cursor-pointer shadow-[4px_4px_0_#0B1B30] transition-transform hover:-translate-y-1 rounded-sm tracking-tight`}
                        onMouseEnter={() => setHoverPrecio(true)}
                        onClick={() => setHoverPrecio(true)}
                      >
                        {contenidoActual.priceBlanco}
                      </span>
                    </div>
                    
                    <ul className="space-y-6 md:space-y-8 font-['Instrument_Serif'] font-normal not-italic text-xl md:text-2xl lg:text-[28px] text-[#0B1B30] leading-tight">
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
            <div className="flex flex-col lg:flex-col items-center w-full lg:w-[200px] shrink-0 gap-6 md:gap-8 lg:gap-16 mt-4 lg:mt-0">
              <button onClick={() => { setVistaActiva("menu"); setHoverPrecio(false); }} className="cursor-pointer mb-2">
                <FlechaRetorno />
              </button>

              <div className="flex flex-row flex-wrap lg:flex-col gap-4 md:gap-8 lg:gap-14 w-full items-center justify-center">
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