"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FolderLayout({ children }) {
  const pathname = usePathname() || '/';

  let activeTab = 'inicio';
  if (pathname.includes('/servicios')) activeTab = 'servicios';
  else if (pathname.includes('/contacto')) activeTab = 'contacto';

  const colorCuerpo = activeTab === 'contacto' ? '#6DC5D4' : '#FFF6E9';
  const colorInicio = activeTab === 'inicio' ? colorCuerpo : '#C8BCB0'; 
  const colorServicios = activeTab === 'servicios' ? colorCuerpo : 'url(#paint2_linear)'; 
  const colorContacto = activeTab === 'contacto' ? colorCuerpo : 'url(#paint1_linear)'; 

  return (
    // 1. "p-4 md:p-6 lg:p-8" crea el marco azul exacto que dibujaste en rojo.
    // 2. "h-screen" fija la pantalla para que el scroll sea solo interno.
    <div className="h-screen w-full bg-[#0B1B30] flex flex-col p-4 md:p-6 lg:p-8 font-sans overflow-hidden">
      
      {/* 3. El contenedor abarca el 100% del espacio disponible tras restar el padding azul */}
      <div className="w-full h-full flex flex-col drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)] relative mx-auto max-w-[2500px]">

        {/* ================= HEADER: PESTAÑAS ================= */}
        <div className="relative w-full z-10 shrink-0">
          <svg 
            viewBox="0 0 1440 155" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block"
          >
            <path d="M1400 110C1400 93.4315 1386.57 80 1370 80H1119.66C1110.57 80 1101.97 84.1209 1096.28 91.2054L1045 155H1400V110Z" fill={colorContacto} className="transition-colors duration-300" />
            <path d="M40 110C40 93.4315 53.4315 80 70 80H320.341C329.43 80 338.029 84.1209 343.724 91.2054L395 155H40V110Z" fill={colorInicio} className="transition-colors duration-300" />
            <path d="M395 91.5C395 74.9315 408.431 61.5 425 61.5L590 61.5C606.569 61.5 620 74.9315 620 91.5V155H395V91.5Z" fill={colorServicios} className="transition-colors duration-300" />

            <defs>
              <linearGradient id="paint1_linear" x1="1222.5" y1="118" x2="1222.5" y2="155" gradientUnits="userSpaceOnUse">
                <stop stopColor="#63C3D1"/>
                <stop offset="1" stopColor="#119EB3"/>
              </linearGradient>
              <linearGradient id="paint2_linear" x1="507.5" y1="67" x2="507.5" y2="210" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9CFFC2"/>
                <stop offset="0.350962" stopColor="#36DB75"/>
                <stop offset="1" stopColor="#03210F"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Textos con tamaño vw (viewport width) para que escalen armónicamente con las pestañas */}
          <Link href="/" className="absolute top-[72%] left-[15.1%] -translate-x-1/2 -translate-y-1/2 font-bold text-[4vw] sm:text-[2vw] lg:text-[1.5vw] text-[#0B1B30] hover:-translate-y-1 transition-transform">
            Inicio
          </Link>
          <Link href="/servicios" className="absolute top-[65%] left-[35.2%] -translate-x-1/2 -translate-y-1/2 font-bold text-[4vw] sm:text-[2vw] lg:text-[1.5vw] text-[#0B1B30] hover:-translate-y-1 transition-transform">
            Servicios
          </Link>
          <Link href="/contacto" className={`absolute top-[72%] left-[84.9%] -translate-x-1/2 -translate-y-1/2 font-bold text-[4vw] sm:text-[2vw] lg:text-[1.5vw] hover:-translate-y-1 transition-transform ${activeTab === 'contacto' ? 'text-[#0B1B30]' : 'text-white'}`}>
            Contáctanos
          </Link>
        </div>

        {/* ================= CUERPO DE LA CARPETA ================= */}
        <main 
          className="mx-auto flex flex-col flex-1 rounded-b-[20px] md:rounded-b-[32px] transition-colors duration-300 z-0 overflow-y-auto overflow-x-hidden relative"
          style={{ 
            width: '94.44%', // Ancho exacto del beige en el SVG para que conecte perfecto
            backgroundColor: colorCuerpo,
            marginTop: '-1px' 
          }}
        >
          {children}
        </main>

      </div>
    </div>
  );
}