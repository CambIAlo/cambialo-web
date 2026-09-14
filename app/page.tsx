"use client";

import React from "react";
import { LottieNativo, LottiePcInteractivo } from "@/components/LottieAnimators";

import animGiro from "@/assets/animaciones/Camb_Giro creativo_Idel.json";
import animLineas from "@/assets/animaciones/Camb_Lineas_Idel.json";
import animSeraphim from "@/assets/animaciones/Camb_Seraphim_Idel.json";
import animPcIdle from "@/assets/animaciones/Camb_Pc Home_Idel.json";
import animPcTrigger from "@/assets/animaciones/Camb_Pc Home_Triger.json";
import animPcReturn from "@/assets/animaciones/Camb_Pc Home_Idel return.json";

export default function InicioPage() {
  return (
    <div className="relative w-full flex flex-col justify-start items-start px-6 md:px-12 lg:px-20 pt-10 md:pt-16 lg:pt-20 pb-20 overflow-hidden max-w-[1400px] mx-auto min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">

      {/* ================= BLOQUE DE TEXTO ================= */}
      <div className="relative z-30 flex flex-col font-['Instrument_Serif'] font-normal not-italic text-[#0B1B30] text-[24px] sm:text-[32px] md:text-[42px] lg:text-[50px] xl:text-[58px] leading-[1.15] tracking-tight w-full">

        <p className="whitespace-nowrap">Cualquiera crea una web genérica con IA...</p>

        <div className="flex items-center flex-nowrap mt-1 md:mt-3">
          <p className="whitespace-nowrap">Nosotros le damos</p>
          <div className="w-[140px] sm:w-[180px] md:w-[240px] lg:w-[280px] xl:w-[320px] ml-2 md:ml-4 flex-shrink-0 -mt-1 md:-mt-2">
            <LottieNativo animacionData={animGiro} />
          </div>
        </div>

        <div className="flex items-center flex-nowrap mt-1 md:mt-3">
          <p className="whitespace-nowrap">que reflejara</p>
          <div className="w-[25px] md:w-[40px] lg:w-[50px] ml-2 md:ml-3 flex-shrink-0">
            <LottieNativo animacionData={animLineas} />
          </div>
        </div>

        <div className="flex items-center flex-nowrap mt-1 md:mt-3">
          <p className="whitespace-nowrap">la calidad de</p>
          <span className="bg-[#36DB75] px-2 md:px-4 py-1 md:py-1.5 ml-2 md:ml-3 rounded-sm italic leading-none flex items-center justify-center whitespace-nowrap">
            tu negocio.
          </span>
        </div>

      </div>

      {/* ================= PERSONAJES FLOTANTES ================= */}

      {/* Seraphim: Tamaños (w-[...]) triplicados para compensar el lienzo transparente del Lottie */}
      <div className="absolute left-[5%] lg:left-[10%] bottom-[5%] lg:bottom-[8%] w-[200px] sm:w-[280px] md:w-[400px] lg:w-[500px] pointer-events-none z-10">
        <LottieNativo animacionData={animSeraphim} />
      </div>

      {/* PC Interactiva */}
      <div className="absolute right-[-5%] md:right-[0%] lg:right-[2%] bottom-0 w-[200px] md:w-[350px] lg:w-[480px] xl:w-[550px] z-20">
        <LottiePcInteractivo 
          animIdel={animPcIdle} 
          animTrigger={animPcTrigger} 
          animReturn={animPcReturn} 
        />
      </div>

    </div>
  );
}