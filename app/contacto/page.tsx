"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import ContactForm from "../../components/ContactForm";
import CalendarView from "../../components/CalendarView"; 

const SkeletonLottie = dynamic(() => import("../../components/SkeletonLottie"), {
  ssr: false,
  loading: () => <div className="w-[343px] h-[515px] bg-transparent"></div>
});

export default function ContactoPage() {
  // 1 = Esqueleto, 2 = Formulario, 3 = Calendario, 4 = Éxito...
  const [paso, setPaso] = useState(1);

  // Estado temporal para guardar los datos antes de tener backend
  const [datosFormulario, setDatosFormulario] = useState({ nombre: "", email: "", mensaje: "" });
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  return (
    <div className="pt-16 pb-24 text-center relative z-10 flex flex-col items-center">
      
      {/* El título cambia dependiendo del paso en el que estemos */}
      <div className="relative mb-8 w-full max-w-[804px] h-[90px] mx-auto flex items-center justify-center">
        {paso === 1 || paso === 2 ? (
          <Image src="/svg/proyectoenmente.svg" alt="¿Tienes algún proyecto en mente?" width={804} height={90} priority />
        ) : (
          <Image src="/svg/reservarunacita.svg" alt="Reserva una cita" width={804} height={90} priority />
        )}
      </div>

      <div className="w-full max-w-[876px] mx-auto relative">
        
       {/* ENRUTADOR INTERNO */}
        {paso === 1 && (
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center animate-fade-in">
            
            <div className="w-[343px] h-[515px] flex-shrink-0 relative z-20">
              <SkeletonLottie />
            </div>

            <div className="flex flex-col items-center md:items-start md:ml-12 mt-12 md:mt-24 relative z-10">
              
              {/* 1. Botón Trabajemos Juntos */}
              <button onClick={() => setPaso(2)} className="w-full max-w-[516px] h-[103px] mb-6 hover:scale-105 transition-transform">
                <Image src="/svg/trabajemosjuntos.svg" alt="Trabajemos Juntos" width={516} height={103} />
              </button>
              
              {/* 2. Texto Envíanos un mensaje */}
              <div className="w-full max-w-[510px] h-[88px] mb-12">
                 <Image src="/svg/envianosunmensaje.svg" alt="Envíanos un mensaje" width={510} height={88} />
              </div>

              {/* 3. ¡AQUÍ VAN LAS REDES SOCIALES QUE FALTABAN! */}
              <div className="flex items-center gap-6 ml-4">
                <Image src="/svg/instagram.svg" alt="Instagram" width={54} height={55} />
                <Image src="/svg/behance.svg" alt="Behance" width={72} height={45} />
              </div>

            </div>
          </div>
        )}

        {paso === 2 && (
          <ContactForm 
            onVolver={() => setPaso(1)} 
            onSiguiente={() => setPaso(3)} 
            // Aquí luego pasarás los datos y funciones para manejarlos
          />
        )}

        {paso === 3 && (
          <CalendarView 
            onVolver={() => setPaso(2)}
            onListo={() => setPaso(4)} // O enviar al backend
          />
        )}

      </div>
    </div>
  );
}