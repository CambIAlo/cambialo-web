"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

import animGiro from "@/assets/animaciones/Camb_Giro creativo_Idel.json";
import animLineas from "@/assets/animaciones/Camb_Lineas_Idel.json";
import animSeraphim from "@/assets/animaciones/Camb_Seraphim_Idel.json";
import animPcIdle from "@/assets/animaciones/Camb_Pc Home_Idel.json";

export default function InicioPage() {
  return (
    // justify-start y pl-12 alinean todo el bloque al margen izquierdo
    <div className="relative w-full h-full flex flex-col justify-start items-start pl-12 md:pl-24 pt-20 md:pt-32">

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
          <span className="bg-[#36DB75] px-4 pt-1 pb-2 ml-4 flex items-center justify-center whitespace-nowrap leading-none">
            tu negocio.
          </span>
        </div>

      </div>

      <div className="absolute bottom-10 left-10 md:left-24 w-[180px] md:w-[280px] h-[100px] md:h-[130px] pointer-events-none z-20">
        <LottieNativo animacionData={animSeraphim} />
      </div>

      {/* Aquí el TV se activa solo, pero START depende del archivo JSON */}
      <div className="absolute bottom-4 right-10 md:right-24 w-[220px] md:w-[400px] h-[200px] md:h-[370px] pointer-events-none z-20">
        <LottieNativo animacionData={animPcIdle} hoverActivo={false} />
      </div>

    </div>
  );
}

function LottieNativo({ animacionData, hoverActivo = false }: { animacionData: any, hoverActivo?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: !hoverActivo, 
      animationData: animacionData,
    });
    return () => animRef.current?.destroy();
  }, [animacionData, hoverActivo]);

  return (
    <div 
      ref={containerRef}
      className={`w-full h-full flex items-center justify-center ${hoverActivo ? "cursor-pointer pointer-events-auto" : "pointer-events-none"}`}
      onMouseEnter={() => hoverActivo && animRef.current?.play()}
      onMouseLeave={() => hoverActivo && animRef.current?.stop()}
    />
  );
}