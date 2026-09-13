"use client";

import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

// Importaciones de Texto y Seraphim
import animGiro from "@/assets/animaciones/Camb_Giro creativo_Idel.json";
import animLineas from "@/assets/animaciones/Camb_Lineas_Idel.json";
import animSeraphim from "@/assets/animaciones/Camb_Seraphim_Idel.json";

// Importaciones de la PC (Los 3 estados)
import animPcIdle from "@/assets/animaciones/Camb_Pc Home_Idel.json";
import animPcTrigger from "@/assets/animaciones/Camb_Pc Home_Triger.json";
import animPcReturn from "@/assets/animaciones/Camb_Pc Home_Idel return.json";

export default function InicioPage() {
  return (
    <div className="relative w-full h-full flex flex-col justify-start items-start pl-12 md:pl-24 pt-20 md:pt-[10%]">

      {/* ================= BLOQUE DE TEXTO CENTRAL ================= */}
      <div className="relative z-10 flex flex-col font-serif text-[#0B1B30] text-[40px] md:text-[55px] lg:text-[75px] leading-[1.05] tracking-tight w-fit">

        <p className="whitespace-nowrap">Cualquiera crea una web genérica con IA...</p>

        <div className="flex items-center mt-2">
          <p className="whitespace-nowrap">Nosotros le damos</p>
          <div className="w-[280px] md:w-[400px] lg:w-[480px] h-[60px] md:h-[85px] lg:h-[100px] ml-4 -mt-2">
            <LottieNativo animacionData={animGiro} />
          </div>
        </div>

        <div className="relative inline-flex items-center w-fit mt-2">
          <p className="whitespace-nowrap">que reflejara</p>
          <div className="absolute -right-[40px] md:-right-[60px] -top-2 md:-top-4 w-[50px] md:w-[75px] h-[70px] md:h-[100px]">
            <LottieNativo animacionData={animLineas} />
          </div>
        </div>

        <div className="flex items-center mt-2">
          <p className="whitespace-nowrap">la calidad de</p>
          <span className="bg-[#36DB75] px-4 pt-1 pb-2 ml-4 flex items-center justify-center whitespace-nowrap leading-none rounded-sm italic">
            tu negocio.
          </span>
        </div>

      </div>

      {/* ================= PERSONAJES FLOTANTES ================= */}

      {/* Seraphim - Tamaño Masivo Aumentado (w-[550px] en PC) */}
      <div className="absolute bottom-[5%] left-[5%] md:left-[10%] w-[250px] md:w-[240px] lg:w-[700px] pointer-events-none z-20">
        <LottieNativo animacionData={animSeraphim} />
      </div>

      {/* PC Interactiva (3 Fases) - Aumentada proporcionalmente */}
      <div className="absolute bottom-[2%] right-[5%] md:right-[10%] w-[250px] md:w-[450px] lg:w-[550px] z-20">
        <LottiePcInteractivo 
          animIdel={animPcIdle} 
          animTrigger={animPcTrigger} 
          animReturn={animPcReturn} 
        />
      </div>

    </div>
  );
}

// =======================================================================
// COMPONENTE 1: Lottie Nativo Simple (Giro, Lineas, Seraphim)
// =======================================================================
function LottieNativo({ animacionData }: { animacionData: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true, 
      animationData: animacionData,
    });
    return () => anim.destroy();
  }, [animacionData]);

  return <div ref={containerRef} className="w-full h-full flex items-center justify-center" />;
}

// =======================================================================
// COMPONENTE 2: Máquina de Estados para la PC (Idle -> Trigger -> Return)
// =======================================================================
function LottiePcInteractivo({ animIdel, animTrigger, animReturn }: { animIdel: any, animTrigger: any, animReturn: any }) {
  const containerIdel = useRef<HTMLDivElement>(null);
  const containerTrigger = useRef<HTMLDivElement>(null);
  const containerReturn = useRef<HTMLDivElement>(null);
  
  // Fases: "idel" (bucle inicial) | "trigger" (entra el USB) | "return" (sale el USB)
  const [fase, setFase] = useState("idel");

  const animIdelRef = useRef<any>(null);
  const animTriggerRef = useRef<any>(null);
  const animReturnRef = useRef<any>(null);

  useEffect(() => {
    if (!containerIdel.current || !containerTrigger.current || !containerReturn.current) return;

    // 1. Cargamos el Estado Base (Looping infinito)
    animIdelRef.current = lottie.loadAnimation({
      container: containerIdel.current, renderer: "svg", loop: true, autoplay: true, animationData: animIdel
    });
    
    // 2. Cargamos el Trigger de entrada (Sin loop, arranca apagado)
    animTriggerRef.current = lottie.loadAnimation({
      container: containerTrigger.current, renderer: "svg", loop: false, autoplay: false, animationData: animTrigger
    });
    
    // 3. Cargamos el Return de salida (Sin loop, arranca apagado)
    animReturnRef.current = lottie.loadAnimation({
      container: containerReturn.current, renderer: "svg", loop: false, autoplay: false, animationData: animReturn
    });

    // Evento mágico: Cuando el Return termina su animación, volvemos a poner la fase "idel"
    const handleReturnComplete = () => setFase("idel");
    animReturnRef.current.addEventListener('complete', handleReturnComplete);

    return () => {
      animIdelRef.current?.destroy();
      animTriggerRef.current?.destroy();
      animReturnRef.current?.destroy();
    };
  }, [animIdel, animTrigger, animReturn]);

  // Controlador de Reproducción basado en la Fase actual
  useEffect(() => {
    if (fase === "trigger") {
      animTriggerRef.current?.goToAndPlay(0, true);
    } else if (fase === "return") {
      animReturnRef.current?.goToAndPlay(0, true);
    } else if (fase === "idel") {
      animIdelRef.current?.play();
    }
  }, [fase]);

  return (
    <div 
      className="w-full aspect-square relative cursor-pointer"
      onMouseEnter={() => setFase("trigger")}
      onMouseLeave={() => {
        // Solo lanzamos la animación de salida si actualmente estaba el trigger activo
        if (fase === "trigger") setFase("return");
      }}
    >
      {/* 
        Usamos opacidad y z-index en lugar de ocultarlos (display:none) para que los SVG 
        no se deformen al desaparecer y reaparecer.
      */}
      <div 
        ref={containerIdel} 
        className={`absolute inset-0 transition-opacity duration-100 ${fase === 'idel' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
      />
      <div 
        ref={containerTrigger} 
        className={`absolute inset-0 transition-opacity duration-100 ${fase === 'trigger' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
      />
      <div 
        ref={containerReturn} 
        className={`absolute inset-0 transition-opacity duration-100 ${fase === 'return' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
      />
    </div>
  );
}