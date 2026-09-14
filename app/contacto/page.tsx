"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image"; 

const SkeletonLottie = dynamic(() => import("../../components/SkeletonLottie"), {
  ssr: false,
  loading: () => <div className="w-[343px] h-[515px] bg-transparent"></div>
});

export default function ContactoPage() {
  return (
    // Contenedor general centrado
    <div className="pt-16 pb-24 text-center relative z-10 flex flex-col items-center">
      
      {/* 
        Texto Superior 
        Ancho: 804px, Alto: 90px
      */}
      <div className="relative mb-8 w-full max-w-[804px] h-[90px] mx-auto flex items-center justify-center">
        <Image 
          src="/svg/proyectoenmente.svg" 
          alt="¿Tienes algún proyecto en mente?"
          width={804}
          height={90}
          className="w-full h-auto"
          priority 
        />
      </div>

      {/* 
        Contenedor Principal de la Interfaz (W: 876px)
        Mantenemos una estructura flex para que sea responsivo
      */}
      <div className="w-full max-w-[876px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-center relative">
        
        {/* 
          1. Esqueleto (Lottie)
          Dimensiones exactas: w-[343px] h-[515px]
        */}
        <div className="w-[343px] h-[515px] flex-shrink-0 relative z-20">
          <SkeletonLottie />
        </div>

        {/* 
          2. Bloque Derecho (Botón, Textos y Redes)
          Agregamos un margen izquierdo (ml) en escritorio para simular la distancia X
        */}
        <div className="flex flex-col items-center md:items-start md:ml-12 mt-12 md:mt-24 relative z-10">
          
          {/* Botón SVG - W: 516px, H: 103px */}
          <div className="w-full max-w-[516px] h-[103px] mb-6">
            <Image 
              src="/svg/trabajemosjuntos.svg" // <-- REEMPLAZA CON LA RUTA DE TU SVG EXPORTADO
              alt="Botón Trabajemos Juntos"
              width={516}
              height={103}
              className="w-full h-auto"
            />
          </div>

          {/* Texto Inferior SVG - W: 510px, H: 88px */}
          <div className="w-full max-w-[510px] h-[88px] mb-12">
             <Image 
              src="/svg/envianosunmensaje.svg" // <-- REEMPLAZA CON LA RUTA DE TU SVG EXPORTADO
              alt="Envíanos un mensaje"
              width={510}
              height={88}
              className="w-full h-auto"
            />
          </div>

          {/* Redes Sociales - Alineadas horizontalmente */}
          <div className="flex items-center gap-6 ml-4">
            {/* Instagram - W: 54px, H: 55px */}
            <Image 
              src="/ruta/a/tu/instagram.svg" // <-- REEMPLAZA
              alt="Instagram"
              width={54}
              height={55}
            />
            {/* Behance - W: 72px, H: 45px */}
            <Image 
              src="/ruta/a/tu/behance.svg" // <-- REEMPLAZA
              alt="Behance"
              width={72}
              height={45}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
























