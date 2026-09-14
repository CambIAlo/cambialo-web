"use client";

import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

export function LottieNativoSimple({ animacionData }: { animacionData: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const anim = lottie.loadAnimation({ container: containerRef.current, renderer: "svg", loop: true, autoplay: true, animationData: animacionData });
    return () => anim.destroy();
  }, [animacionData]);
  return <div ref={containerRef} className="w-full h-full" />;
}

export function BotonLottieMenu({ animacionData, onClick, margenNegativo }: { animacionData: any, onClick: () => void, margenNegativo: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const isMobile = window.innerWidth < 1024; // Detectamos si es móvil
    
    animRef.current = lottie.loadAnimation({
      container: containerRef.current, renderer: "svg", loop: true, 
      autoplay: isMobile, // Autoplay solo en móviles
      animationData: animacionData,
    });
    return () => animRef.current?.destroy();
  }, [animacionData]);

  return (
    <div 
      className={`relative w-full max-w-[850px] aspect-[980/350] flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer z-10 hover:z-20 ${margenNegativo}`}
      onClick={onClick} 
      onMouseEnter={() => { if (window.innerWidth >= 1024) animRef.current?.play(); }} 
      onMouseLeave={() => { if (window.innerWidth >= 1024) animRef.current?.stop(); }} 
    >
      <div ref={containerRef} className="w-full h-full pointer-events-none" />
    </div>
  );
}

export function BotonLottieSidebar({ animacionData, colorFondo, onClick }: { animacionData: any, colorFondo: string, onClick: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const isMobile = window.innerWidth < 1024;
    
    animRef.current = lottie.loadAnimation({
      container: containerRef.current, renderer: "svg", loop: true, 
      autoplay: isMobile,
      animationData: animacionData,
    });
    return () => animRef.current?.destroy();
  }, [animacionData]);

  return (
    <div 
      // 1. EL PADRE: En móvil (280px) y tablet (md: 400px) usa aspect-ratio para mantener la altura correcta.
      // En PC (lg:) vuelve a ser la pastilla fija de 45px de alto.
      className="group relative w-full max-w-[280px] md:max-w-[400px] lg:max-w-[180px] aspect-[980/350] lg:aspect-auto lg:h-[45px] flex items-center justify-center cursor-pointer z-10 hover:z-50"
      onClick={onClick} 
      onMouseEnter={() => { if (window.innerWidth >= 1024) animRef.current?.play(); }} 
      onMouseLeave={() => { if (window.innerWidth >= 1024) animRef.current?.stop(); }}
    >
      {/* Fondo Pastilla (Solo visible en PC lg:block) */}
      <div className={`hidden lg:block absolute inset-0 border-[3px] border-[#0B1B30] rounded-full shadow-[0_4px_0_#0B1B30] transition-opacity duration-200 group-hover:opacity-0 ${colorFondo}`} />
      
      {/* 2. EL LOTTIE: 
          En móvil/tablet -> relative, w-full, scale-100 (fluye natural con el padre).
          En PC (lg:) -> absolute, w-[550px], scale-[0.4] a [0.9] (tu lógica exacta de hover).
      */}
      <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-8 w-full lg:w-[550px] pointer-events-none opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 scale-100 lg:scale-[0.4] lg:group-hover:scale-[0.9] origin-center lg:origin-right flex items-center justify-center">
        <div ref={containerRef} className="w-full h-full" />
      </div>
    </div>
  );
  
}
// =======================================================================
// COMPONENTE 1: Lottie Nativo Simple (Giro, Lineas, Seraphim)
// =======================================================================
export function LottieNativo({ animacionData }: { animacionData: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const anim = lottie.loadAnimation({
      container: containerRef.current, renderer: "svg", loop: true, autoplay: true, animationData: animacionData,
    });
    return () => anim.destroy();
  }, [animacionData]);

  // Usar h-auto permite que el SVG mantenga su proporción perfecta
  return <div ref={containerRef} className="w-full h-auto flex items-center justify-center pointer-events-none" />;
}

// =======================================================================
// COMPONENTE 2: Máquina de Estados para la PC (Idle -> Trigger -> Return)
// =======================================================================
export function LottiePcInteractivo({ animIdel, animTrigger, animReturn }: { animIdel: any, animTrigger: any, animReturn: any }) {
  const containerIdel = useRef<HTMLDivElement>(null);
  const containerTrigger = useRef<HTMLDivElement>(null);
  const containerReturn = useRef<HTMLDivElement>(null);
  
  const [fase, setFase] = useState("idel");
  const [isMobile, setIsMobile] = useState(false);

  const animIdelRef = useRef<any>(null);
  const animTriggerRef = useRef<any>(null);
  const animReturnRef = useRef<any>(null);

  // Detectamos si es móvil al cargar
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    if (!containerIdel.current || !containerTrigger.current || !containerReturn.current) return;

    animIdelRef.current = lottie.loadAnimation({ container: containerIdel.current, renderer: "svg", loop: true, autoplay: true, animationData: animIdel });
    animTriggerRef.current = lottie.loadAnimation({ container: containerTrigger.current, renderer: "svg", loop: false, autoplay: false, animationData: animTrigger });
    animReturnRef.current = lottie.loadAnimation({ container: containerReturn.current, renderer: "svg", loop: false, autoplay: false, animationData: animReturn });

    // Eventos: Cuando terminan las animaciones de transición
    const handleTriggerComplete = () => {
      if (isMobile) setFase("return"); // En móvil, cuando acaba de entrar el USB, lo saca automáticamente
    };
    const handleReturnComplete = () => setFase("idel");

    animTriggerRef.current.addEventListener('complete', handleTriggerComplete);
    animReturnRef.current.addEventListener('complete', handleReturnComplete);

    return () => {
      animIdelRef.current?.destroy();
      animTriggerRef.current?.destroy();
      animReturnRef.current?.destroy();
    };
  }, [animIdel, animTrigger, animReturn, isMobile]);

  // Controlador de Reproducción y Loop Automático
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (fase === "trigger") {
      animTriggerRef.current?.goToAndPlay(0, true);
    } else if (fase === "return") {
      animReturnRef.current?.goToAndPlay(0, true);
    } else if (fase === "idel") {
      animIdelRef.current?.play();
      
      // Magia para Móviles: Espera 3 segundos en idle y lanza la animación sola
      if (isMobile) {
        timer = setTimeout(() => {
          setFase("trigger");
        }, 3000);
      }
    }

    return () => clearTimeout(timer);
  }, [fase, isMobile]);

  return (
    <div 
      className="w-full relative cursor-pointer"
      onMouseEnter={() => { if (!isMobile) setFase("trigger"); }}
      onMouseLeave={() => { if (!isMobile && fase === "trigger") setFase("return"); }}
    >
      <div ref={containerIdel} className={`w-full h-auto transition-opacity duration-100 ${fase === 'idel' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
      <div ref={containerTrigger} className={`absolute inset-0 w-full h-full transition-opacity duration-100 ${fase === 'trigger' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
      <div ref={containerReturn} className={`absolute inset-0 w-full h-full transition-opacity duration-100 ${fase === 'return' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
    </div>
  );
}