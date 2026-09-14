"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { TabActivaBeige, TabInactivaGris, TabHoverVerde, TabContactanosBlue, LogoCambialo } from "@/components/LayoutIcons";

export default function FolderLayout({ children }) {
  const pathname = usePathname();

  const isInicio = pathname === "/" || pathname === "/inicio";
  const isServicios = pathname.startsWith("/servicio");
  const isContactanos = pathname.startsWith("/contacto");

  // El fondo se vuelve azul cuando isContactanos es true
  const bgFolder = isContactanos ? "bg-[#5EBCD0]" : "bg-[#FFF6E9]";

  return (
    <div className="w-full min-h-screen bg-[#0B1B30] flex flex-col items-center px-2 sm:px-6 md:px-10 lg:px-16 pt-8 md:pt-10 overflow-x-hidden">
      
      {/* ================= BARRA DE NAVEGACIÓN ================= */}
      <div className="w-full max-w-[1400px] flex justify-between items-end relative z-10 -mb-1">
        
        {/* GRUPO IZQUIERDO: Inicio + Servicios */}
        <div className="flex items-end relative">
          
          {/* PESTAÑA INICIO */}
          <Link 
            href="/" 
            className={`group relative flex items-end cursor-pointer ${isInicio ? 'w-[100px] sm:w-[150px] md:w-[250px] lg:w-[355px] z-30' : 'w-[65px] sm:w-[95px] md:w-[158px] lg:w-[225px] z-10'}`}
          >
            {isInicio ? (
              <TabActivaBeige className="w-full h-auto drop-shadow-md" />
            ) : (
              <>
                <TabInactivaGris className="w-full h-auto drop-shadow-md transition-opacity duration-0 group-hover:opacity-0" />
                <TabHoverVerde className="absolute bottom-0 left-0 w-full h-auto drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-0" />
              </>
            )}
            
            {/* TEXTO INICIO: 40px en Activo/Hover, 24px en Inactivo */}
            <span className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 font-['Noto_Sans_Georgian']
              ${isInicio 
                ? 'top-[45%] left-[39.4%] font-bold text-[14px] sm:text-[18px] md:text-[28px] lg:text-[40px] text-[#0B1B30]' 
                : 'top-[50%] left-[37.7%] font-medium text-[10px] sm:text-[12px] md:text-[18px] lg:text-[24px] text-[#FFF6E9] group-hover:top-[42%] group-hover:font-bold group-hover:text-[14px] sm:group-hover:text-[18px] md:group-hover:text-[28px] lg:group-hover:text-[40px] group-hover:text-[#0B1B30]'}
            `}>
              Inicio
            </span>
          </Link>

          {/* PESTAÑA SERVICIOS */}
          <Link 
            href="/servicios" 
            className={`group relative flex items-end cursor-pointer -ml-[10px] sm:-ml-[20px] md:-ml-[30px] lg:-ml-[40px] ${isServicios ? 'w-[100px] sm:w-[150px] md:w-[250px] lg:w-[355px] z-30' : 'w-[65px] sm:w-[95px] md:w-[158px] lg:w-[225px] z-10'}`}
          >
            {isServicios ? (
              <TabActivaBeige className="w-full h-auto drop-shadow-md" />
            ) : (
              <>
                <TabInactivaGris className="w-full h-auto drop-shadow-md transition-opacity duration-0 group-hover:opacity-0" />
                <TabHoverVerde className="absolute bottom-0 left-0 w-full h-auto drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-0" />
              </>
            )}
            
            {/* TEXTO SERVICIOS: 40px en Activo/Hover, 24px en Inactivo */}
            <span className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 font-['Noto_Sans_Georgian']
              ${isServicios 
                ? 'top-[45%] left-[39.4%] font-bold text-[14px] sm:text-[18px] md:text-[28px] lg:text-[40px] text-[#0B1B30]' 
                : 'top-[50%] left-[37.7%] font-medium text-[10px] sm:text-[12px] md:text-[18px] lg:text-[24px] text-[#FFF6E9] group-hover:top-[42%] group-hover:font-bold group-hover:text-[14px] sm:group-hover:text-[18px] md:group-hover:text-[28px] lg:group-hover:text-[40px] group-hover:text-[#0B1B30]'}
            `}>
              Servicios
            </span>
          </Link>

        </div>

        {/* GRUPO DERECHO: Logo + Contáctanos */}
        <div className="flex items-end relative gap-x-1 sm:gap-x-4 md:gap-x-10 lg:gap-x-16">
          
          {/* LOGO */}
          <div className="w-[35px] sm:w-[50px] md:w-[100px] lg:w-[140px] pointer-events-none mb-1 md:mb-2">
            <LogoCambialo className="w-full h-auto drop-shadow-md" />
          </div>
          
          {/* PESTAÑA CONTÁCTANOS */}
          <Link 
            href="/contacto" 
            className={`group relative flex items-end cursor-pointer w-[85px] sm:w-[130px] md:w-[220px] lg:w-[355px] transition-all ${isContactanos ? 'z-30' : 'z-10'}`}
          >
            {isContactanos ? (
               <TabContactanosBlue className="w-full h-auto drop-shadow-md" />
            ) : (
               <>
                 <TabContactanosBlue className="w-full h-auto drop-shadow-md" />
               </>
            )}
            
            {/* TEXTO CONTÁCTANOS: 40px en Activo/Hover, 24px en Inactivo */}
            <span className={`absolute left-[60%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 font-['Noto_Sans_Georgian']
              ${isContactanos 
                ? 'top-[45%] font-bold text-[12px] sm:text-[16px] md:text-[28px] lg:text-[40px] text-[#0B1B30]' 
                : 'top-[50%] font-medium text-[10px] sm:text-[12px] md:text-[18px] lg:text-[24px] text-[#FFF6E9] group-hover:top-[42%] group-hover:font-bold group-hover:text-[12px] sm:group-hover:text-[16px] md:group-hover:text-[28px] lg:group-hover:text-[40px] group-hover:text-[#0B1B30]'}
            `}>
              Contáctanos
            </span>
          </Link>

        </div>

      </div>

      {/* ================= CUERPO DE LA CARPETA ================= */}
      <div className={`relative z-20 w-full max-w-[1400px] min-h-[75vh] rounded-b-[20px] sm:rounded-b-[30px] md:rounded-b-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-colors duration-500 ${bgFolder}`}>
        {children}
      </div>

    </div>
  );
}