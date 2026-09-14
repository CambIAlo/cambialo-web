"use client";

import React, { useState } from "react";

interface CalendarViewProps {
  onVolver: () => void;
  onListo: () => void;
}

export default function CalendarView({ onVolver, onListo }: CalendarViewProps) {
  // Cuando implementes la lógica real de fechas, usarás estos estados
  const [mesActual, setMesActual] = useState("Octubre 2026");
  const [diaSeleccionado, setDiaSeleccionado] = useState<number | null>(null);

  // Array simulado para la vista (luego lo generarás dinámicamente con JS Date)
  const diasSemana = ["Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."];
  const diasMes = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-[700px] mx-auto animate-fade-in flex flex-col items-center">
      
      {/* CONTENEDOR PRINCIPAL DEL CALENDARIO */}
      <div className="w-full border-[3px] border-[#0B1B30] rounded-3xl overflow-hidden shadow-[8px_8px_0_0_rgba(11,27,48,1)] bg-[#FFF6E9]">
        
        {/* Cabecera: Mes y Navegación */}
        <div className="bg-[#0B1B30] text-white py-4 px-6 flex justify-between items-center">
          <button className="text-2xl hover:text-gray-300 transition-colors">&lt;</button>
          <h2 className="text-xl md:text-2xl font-bold tracking-wide">{mesActual}</h2>
          <button className="text-2xl hover:text-gray-300 transition-colors">&gt;</button>
        </div>

        {/* Días de la semana (Azul medio) */}
        <div className="bg-[#2A78A0] text-white grid grid-cols-7 text-center py-2 font-semibold">
          {diasSemana.map((dia) => (
            <div key={dia}>{dia}</div>
          ))}
        </div>

        {/* Cuadrícula de Fechas */}
        <div className="grid grid-cols-7 text-center text-lg text-[#0B1B30] font-medium p-2 gap-y-4">
          
          {/* Espacios vacíos para alinear el primer día (ej. si el mes empieza en Jueves) */}
          <div className="text-gray-400 p-2">27</div>
          <div className="text-gray-400 p-2">28</div>
          <div className="text-gray-400 p-2">29</div>
          <div className="text-gray-400 p-2">30</div>

          {/* Días reales del mes */}
          {diasMes.map((dia) => (
            <button 
              key={dia}
              onClick={() => setDiaSeleccionado(dia)}
              className={`p-2 w-10 h-10 mx-auto rounded-full flex items-center justify-center transition-all
                ${diaSeleccionado === dia ? 'bg-[#0B1B30] text-white' : 'hover:bg-gray-200'}
              `}
            >
              {dia}
            </button>
          ))}
        </div>
      </div>

      {/* Controles Inferiores */}
      <div className="flex items-center justify-between mt-12 w-full px-4">
        <button 
          onClick={onVolver}
          className="cursor-pointer bg-[#2A78A0] hover:bg-[#1E528E] text-white font-bold text-xl px-8 py-3 rounded-full border-[3px] border-[#0B1B30] transition-colors shadow-[4px_4px_0_0_rgba(11,27,48,1)] hover:translate-y-1 hover:shadow-none"
        >
          Volver
        </button>

        <button 
          onClick={onListo}
          className="cursor-pointer bg-[#36DB75] hover:bg-[#28B25C] text-[#0B1B30] font-bold text-xl px-8 py-3 rounded-full border-[3px] border-[#0B1B30] transition-colors shadow-[4px_4px_0_0_rgba(11,27,48,1)] hover:translate-y-1 hover:shadow-none"
        >
          Listo
        </button>
      </div>

    </div>
  );
}