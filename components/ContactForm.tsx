"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AsteriscoSVG } from "./icons"; 

interface ContactFormProps {
  onVolver: () => void;
  onSiguiente: (datos: { nombre: string; email: string; mensaje: string }) => void; 
}

export default function ContactForm({ onVolver, onSiguiente }: ContactFormProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  
  // 1. Nuevo estado para manejar el mensaje de error
  const [error, setError] = useState("");

  // 2. Función de validación antes de avanzar
  const validarYContinuar = (e: React.MouseEvent) => {
    e.preventDefault();

    // Verificamos que no haya campos vacíos (trim() elimina espacios en blanco)
    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
      setError("Por favor, completa todos los campos para continuar.");
      return;
    }

    // Verificamos que el email tenga un formato básico válido
    if (!email.includes("@") || !email.includes(".")) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Si pasa las validaciones, limpiamos el error y avanzamos
    setError("");
    onSiguiente({ nombre, email, mensaje });
  };

  return (
    <div className="w-full max-w-[700px] mx-auto animate-fade-in">
      <form className="w-full shadow-lg rounded-2xl overflow-hidden flex flex-col text-left">
        
        <div className="bg-[#FFF6E9] p-6 md:p-8 flex flex-col gap-6 md:gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex-shrink-0 text-[#0B1B30] flex items-center justify-center">
                <AsteriscoSVG />
              </div>
              <label className="text-[#0B1B30] font-bold md:w-40">Nombre y apellido</label>
            </div>
            <input 
  type="text" 
  value={nombre}
  onChange={(e) => {
    // Expresión regular que solo permite letras (incluyendo acentos y eñes) y espacios
    const soloLetras = e.target.value.replace(/[0-9]/g, "");
    setNombre(soloLetras);
    if (error) setError("");
  }}
  className="flex-1 w-full bg-transparent border border-[#0B1B30] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#0B1B30] text-[#0B1B30] font-semibold" 
/>
</div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex-shrink-0 text-[#0B1B30] flex items-center justify-center">
                <AsteriscoSVG />
              </div>
              <label className="text-[#0B1B30] font-bold md:w-40">Email</label>
            </div>
            <input 
              type="email" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              className="flex-1 w-full bg-transparent border border-[#0B1B30] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#0B1B30] text-[#0B1B30] font-semibold" 
            />
          </div>
        </div>

        <div className="bg-[#0B1B30] p-6 md:p-8 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 flex-shrink-0 text-white flex items-center justify-center">
              <AsteriscoSVG />
            </div>
            <label className="font-bold">Mensaje</label>
          </div>
          <textarea 
            rows={4} 
            value={mensaje}
            onChange={(e) => {
              setMensaje(e.target.value);
              if (error) setError("");
            }}
            className="w-full bg-transparent border border-white rounded-md p-3 outline-none focus:ring-2 focus:ring-white resize-none mt-2 text-white font-semibold"
          ></textarea>
        </div>

      </form>

      {/* 3. Mensaje de error visual */}
      {error && (
        <div className="mt-6 text-center text-red-500 font-bold bg-red-100 py-2 px-4 rounded-md border border-red-300 animate-fade-in">
          {error}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 mt-8 w-full px-4">
        <button 
          onClick={onVolver}
          className="group relative bg-[#FFF6E9] hover:bg-[#2563EB] text-[#0B1B30] hover:text-white font-bold text-xl px-8 py-3 rounded-full border-[3px] border-[#0B1B30] transition-colors duration-200 shadow-[4px_4px_0_0_rgba(11,27,48,1)] hover:shadow-[2px_2px_0_0_rgba(11,27,48,1)] hover:translate-x-[2px] hover:translate-y-[2px] w-full md:w-auto"
        >
          Volver
        </button>

        <div className="flex gap-4 order-last md:order-none w-full md:w-auto justify-center">
          <Image src="/svg/instagram.svg" alt="Instagram" width={40} height={40} />
          <Image src="/svg/behance.svg" alt="Behance" width={40} height={40} />
        </div>

        <button 
          // 4. Cambiamos el onClick para que ejecute la validación primero
          onClick={validarYContinuar} 
          className="group relative bg-[#FFF6E9] hover:bg-[#2563EB] text-[#0B1B30] hover:text-white font-bold text-xl px-8 py-3 rounded-full border-[3px] border-[#0B1B30] transition-colors duration-200 shadow-[4px_4px_0_0_rgba(11,27,48,1)] hover:shadow-[2px_2px_0_0_rgba(11,27,48,1)] hover:translate-x-[2px] hover:translate-y-[2px] w-full md:w-auto"
        >
          Siguiente
        </button>

      </div>
    </div>
  );
}