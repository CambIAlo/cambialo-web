"use client";

import React from "react";
import Image from "next/image";

interface SuccessViewProps {
  onVolverInicio: () => void;
  fecha?: string;
  hora?: string; 
}

export default function SuccessView({ onVolverInicio, fecha, hora }: SuccessViewProps) {
  return (
    <div className="w-full flex flex-col items-center justify-start animate-fade-in pt-4 pb-8 relative">
      
      {/* 1. Título: ¡Gracias! */}
      <div className="mb-6">
        <Image 
          src="/svg/gracias.svg" 
          alt="¡Gracias!" 
          width={328} 
          height={103} 
          priority
        />
      </div>

      {/* 2. Subtítulo: Te contactaremos lo antes posible */}
      <div className="mb-10 w-full flex justify-center">
         <Image 
          src="/svg/te-contactaremos.svg" 
          alt="Te contactaremos lo antes posible" 
          width={863} 
          height={140} 
        />
      </div>

      {/* 3. Tarjeta de resumen temporal (Aquí irá la animación Lottie luego) */}
      <div className="w-full max-w-[700px] min-h-[200px] bg-[#FFF6E9] border-[3px] border-[#0B1B30] rounded-3xl flex flex-col items-center justify-center p-8 mb-12 shadow-[8px_8px_0_0_rgba(11,27,48,1)] text-[#0B1B30]">
        <p className="text-xl md:text-2xl font-bold mb-4 text-center">
          Tu cita fue agendada con éxito
        </p>
        
        {/* Validamos que la fecha y hora existan antes de mostrarlas */}
        {fecha && hora ? (
          <div className="text-lg md:text-xl font-medium text-center flex flex-col gap-2">
            <p>Día: <span className="font-bold text-[#2A78A0]">{fecha}</span></p>
            <p>Hora: <span className="font-bold text-[#2A78A0]">{hora}</span></p>
          </div>
        ) : (
          <p className="text-gray-500 italic">Procesando detalles...</p>
        )}
      </div>

      {/* 4. Redes Sociales */}
      <div className="flex items-center gap-8 mb-16">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform">
          <Image src="/svg/instagram.svg" alt="Instagram" width={48} height={48} />
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform">
          <Image src="/svg/behance.svg" alt="Behance" width={58} height={38} />
        </a>
      </div>

      {/* 5. Botón Volver */}
      <div className="w-full flex justify-start px-4 md:px-8">
         <button 
          onClick={onVolverInicio}
          className="group relative bg-[#FFF6E9] hover:bg-[#2563EB] text-[#0B1B30] hover:text-white font-bold text-xl px-10 py-3 rounded-full border-[3px] border-[#0B1B30] transition-colors duration-200 shadow-[4px_4px_0_0_rgba(11,27,48,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          Volver
        </button>
      </div>

    </div>
  );
}