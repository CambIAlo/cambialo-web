"use client";

import React from "react";
import Image from "next/image";

// 1. Agregamos onSiguiente a la interfaz de las propiedades
interface ContactFormProps {
  onVolver: () => void;
  onSiguiente: () => void; 
}

// 2. Extraemos onSiguiente de las props del componente
export default function ContactForm({ onVolver, onSiguiente }: ContactFormProps) {
  return (
    <div className="w-full max-w-[700px] mx-auto animate-fade-in">
      <form className="w-full shadow-lg rounded-2xl overflow-hidden flex flex-col text-left">
        
        {/* Parte Superior Beige */}
        <div className="bg-[#FFF6E9] p-6 md:p-8 flex flex-col gap-6 md:gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl text-[#0B1B30]">✱</span>
              <label className="text-[#0B1B30] font-bold md:w-40">Nombre y apellido</label>
            </div>
            <input type="text" className="flex-1 w-full bg-transparent border border-[#0B1B30] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#0B1B30]" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl text-[#0B1B30]">✱</span>
              <label className="text-[#0B1B30] font-bold md:w-40">Email</label>
            </div>
            <input type="email" className="flex-1 w-full bg-transparent border border-[#0B1B30] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#0B1B30]" />
          </div>
        </div>

        {/* Parte Inferior Azul Oscuro */}
        <div className="bg-[#0B1B30] p-6 md:p-8 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-white">
            <span className="text-xl md:text-2xl">✱</span>
            <label className="font-bold">Mensaje</label>
          </div>
          <textarea 
            rows={4} 
            className="w-full bg-transparent border border-white rounded-md p-3 text-white outline-none focus:ring-2 focus:ring-white resize-none mt-2"
          ></textarea>
        </div>

      </form>

      {/* Controles Inferiores */}
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 mt-8 w-full px-4">
        
        <button 
          onClick={onVolver}
          className="
            cursor-pointer group relative bg-[#FFF6E9] hover:bg-[#2563EB] text-[#0B1B30] hover:text-white font-bold text-xl px-8 py-3 rounded-full 
            border-[3px] border-[#0B1B30] transition-colors duration-200 shadow-[4px_4px_0_0_rgba(11,27,48,1)] 
            hover:shadow-[2px_2px_0_0_rgba(11,27,48,1)] hover:translate-x-[2px] hover:translate-y-[2px] w-full md:w-auto
          "
        >
          Volver
        </button>

        <div className="flex gap-4 order-last md:order-none w-full md:w-auto justify-center">
          <Image src="/svg/instagram.svg" alt="Instagram" width={40} height={40} />
          <Image src="/svg/behance.svg" alt="Behance" width={40} height={40} />
        </div>

        {/* 3. Le pasamos la función al evento onClick del botón Siguiente */}
        <button 
          onClick={onSiguiente} 
          className="
            cursor-pointer group relative bg-[#FFF6E9] hover:bg-[#2563EB] text-[#0B1B30] hover:text-white font-bold text-xl px-8 py-3 rounded-full 
            border-[3px] border-[#0B1B30] transition-colors duration-200 shadow-[4px_4px_0_0_rgba(11,27,48,1)] 
            hover:shadow-[2px_2px_0_0_rgba(11,27,48,1)] hover:translate-x-[2px] hover:translate-y-[2px] w-full md:w-auto
          "
        >
          Siguiente
        </button>

      </div>
    </div>
  );
}