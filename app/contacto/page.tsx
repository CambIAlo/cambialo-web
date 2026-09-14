"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import ContactForm from "../../components/ContactForm";
import CalendarView from "../../components/CalendarView";
import SuccessView from "../../components/SuccessView";
import { agendarCita } from "../actions/citas";

const SkeletonLottie = dynamic(() => import("../../components/SkeletonLottie"), {
  ssr: false,
  loading: () => <div className="w-[343px] h-[515px] bg-transparent"></div>,
});

export default function ContactoPage() {
  const [paso, setPaso] = useState(1);
  const [datosFormulario, setDatosFormulario] = useState({ nombre: "", email: "", mensaje: "" });
  const [fechaSeleccionada, setFechaSeleccionada] = useState<{ fecha: Date; hora: string } | null>(null);

  return (
    <div className="pt-16 pb-24 text-center relative z-10 flex flex-col items-center">
      
      {/* Título dinámico */}
      <div className="relative mb-8 w-full max-w-[804px] h-[90px] mx-auto flex items-center justify-center">
        {paso === 1 || paso === 2 ? (
          <Image src="/svg/proyectoenmente.svg" alt="¿Tienes algún proyecto en mente?" width={804} height={90} priority />
        ) : paso === 3 ? (
          <Image src="/svg/reservarunacita.svg" alt="Reserva una cita" width={804} height={90} priority />
        ) : null}
      </div>

      <div className="w-full max-w-[876px] mx-auto relative">
        
        {paso === 1 && (
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center animate-fade-in">
            <div className="w-[343px] h-[515px] flex-shrink-0 relative z-20">
              <SkeletonLottie />
            </div>

            <div className="flex flex-col items-center md:items-start md:ml-12 mt-12 md:mt-24 relative z-10">
              <button onClick={() => setPaso(2)} className="cursor-pointer w-full max-w-[516px] h-[103px] mb-6 hover:scale-105 transition-transform">
                <Image src="/svg/trabajemosjuntos.svg" alt="Trabajemos Juntos" width={516} height={103} />
              </button>
              
              <div className="w-full max-w-[510px] h-[88px] mb-12">
                 <Image src="/svg/envianosunmensaje.svg" alt="Envíanos un mensaje" width={510} height={88} />
              </div>

              <div className="flex items-center gap-6 ml-4">
                <a href="https://www.instagram.com/somos.cambialo/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform">
                  <Image src="/svg/instagram.svg" alt="Instagram" width={54} height={55} />
                </a>
                <a href="https://www.behance.net/idgonza" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform">
                  <Image src="/svg/behance.svg" alt="Behance" width={72} height={45} />
                </a>
              </div>
            </div>
          </div>
        )}

        {paso === 2 && (
          <ContactForm
            onVolver={() => setPaso(1)}
            onSiguiente={(datos) => {
              if (datos) setDatosFormulario(datos);
              setPaso(3);
            }}
          />
        )}

        {paso === 3 && (
          <CalendarView
            onVolver={() => setPaso(2)}
            onListo={async (fecha, hora) => {
              setFechaSeleccionada({ fecha, hora });

              const respuesta = await agendarCita({
                nombre: datosFormulario.nombre,
                email: datosFormulario.email,
                mensaje: datosFormulario.mensaje,
                fecha,
                hora,
              });

              if (respuesta.success) {
                setPaso(4); // Dirección a la vista de confirmación
              } else {
                alert(respuesta.error);
              }
            }}
          />
        )}

        {paso === 4 && (
          <SuccessView
            onVolverInicio={() => setPaso(1)}
            fecha={fechaSeleccionada?.fecha.toISOString().split("T")[0]}
            hora={fechaSeleccionada?.hora}
          />
        )}

      </div>
    </div>
  );
}