"use client";

import React, { useState, useEffect } from "react";
import { obtenerCitasOcupadas } from "../app/actions/citas";

interface CalendarViewProps {
  onVolver: () => void;
  onListo: (fecha: Date, hora: string) => void;
}

export default function CalendarView({ onVolver, onListo }: CalendarViewProps) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const maxFecha = new Date(hoy.getFullYear(), hoy.getMonth() + 3, hoy.getDate());

  const [fechaVista, setFechaVista] = useState(new Date(hoy.getFullYear(), hoy.getMonth(), 1));
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date | null>(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState<string | null>(null);
  const [citasOcupadas, setCitasOcupadas] = useState<{ fecha: string; hora: string }[]>([]);

  useEffect(() => {
    obtenerCitasOcupadas().then((res: any) => {
      if (res?.success) setCitasOcupadas(res.citas);
    });
  }, []);

  const year = fechaVista.getFullYear();
  const month = fechaVista.getMonth();
  const diasEnMes = new Date(year, month + 1, 0).getDate();
  const primerDiaSemana = new Date(year, month, 1).getDay();

  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const diasSemana = ["Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."];
  const horariosDisponibles = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00"];

  const mesActualOffset = (year - hoy.getFullYear()) * 12 + (month - hoy.getMonth());
  const puedeRetroceder = mesActualOffset > 0;
  const puedeAvanzar = mesActualOffset < 3;

  const diasGrid = [];
  for (let i = 0; i < primerDiaSemana; i++) {
    diasGrid.push(<div key={`empty-${i}`} className="p-2"></div>);
  }

  for (let dia = 1; dia <= diasEnMes; dia++) {
    const fechaIteracion = new Date(year, month, dia);
    const fechaISO = fechaIteracion.toISOString().split("T")[0];
    const esPasado = fechaIteracion < hoy;
    const esMuyLejos = fechaIteracion > maxFecha;
    
    // Si todas las horas del día están tomadas
    const horasOcupadasHoy = citasOcupadas.filter((c) => c.fecha === fechaISO);
    const diaCompleto = horasOcupadasHoy.length >= horariosDisponibles.length;

    const estaDeshabilitado = esPasado || esMuyLejos || diaCompleto;
    const esSeleccionado = fechaSeleccionada?.getTime() === fechaIteracion.getTime();

    diasGrid.push(
      <button
        key={dia}
        type="button"
        disabled={estaDeshabilitado}
        onClick={() => {
          setFechaSeleccionada(fechaIteracion);
          setHoraSeleccionada(null);
        }}
        className={`p-2 w-10 h-10 mx-auto rounded-full flex items-center justify-center font-semibold transition-all
          ${estaDeshabilitado ? "text-gray-400 cursor-not-allowed opacity-40" : "hover:bg-gray-200 text-[#0B1B30] cursor-pointer"}
          ${esSeleccionado && !estaDeshabilitado ? "bg-[#0B1B30] text-white hover:bg-[#0B1B30]" : ""}
        `}
      >
        {dia}
      </button>
    );
  }

  const fechaSeleccionadaTexto = fechaSeleccionada?.toISOString().split("T")[0];

  return (
    <div className="w-full max-w-[700px] mx-auto animate-fade-in flex flex-col items-center">
      <div className="w-full border-[3px] border-[#0B1B30] rounded-3xl overflow-hidden shadow-[8px_8px_0_0_rgba(11,27,48,1)] bg-[#FFF6E9]">
        
        {/* Cabecera */}
        <div className="bg-[#0B1B30] text-white py-4 px-6 flex justify-between items-center">
          <button
            type="button"
            onClick={() => puedeRetroceder && setFechaVista(new Date(year, month - 1, 1))}
            disabled={!puedeRetroceder}
            className={`text-2xl font-bold px-3 ${!puedeRetroceder ? "text-gray-600 cursor-not-allowed" : "hover:text-[#6DC5D4]"}`}
          >
            &lt;
          </button>
          <h2 className="text-xl md:text-2xl font-bold tracking-wide capitalize">
            {meses[month]} {year}
          </h2>
          <button
            type="button"
            onClick={() => puedeAvanzar && setFechaVista(new Date(year, month + 1, 1))}
            disabled={!puedeAvanzar}
            className={`text-2xl font-bold px-3 ${!puedeAvanzar ? "text-gray-600 cursor-not-allowed" : "hover:text-[#6DC5D4]"}`}
          >
            &gt;
          </button>
        </div>

        {/* Días semana */}
        <div className="bg-[#2A78A0] text-white grid grid-cols-7 text-center py-2 font-semibold text-sm md:text-base">
          {diasSemana.map((dia) => (
            <div key={dia}>{dia}</div>
          ))}
        </div>

        {/* Días */}
        <div className="grid grid-cols-7 text-center text-lg p-2 gap-y-2">
          {diasGrid}
        </div>

        {/* Horarios con validación de ocupados */}
        {fechaSeleccionada && (
          <div className="border-t-[3px] border-[#0B1B30] p-4 bg-white">
            <h3 className="text-[#0B1B30] font-bold text-center mb-4">Horarios disponibles</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {horariosDisponibles.map((hora) => {
                const estaOcupada = citasOcupadas.some(
                  (c) => c.fecha === fechaSeleccionadaTexto && c.hora === hora
                );

                return (
                  <button
                    key={hora}
                    type="button"
                    disabled={estaOcupada}
                    onClick={() => setHoraSeleccionada(hora)}
                    className={`px-4 py-2 rounded-full font-bold border-2 transition-all
                      ${
                        estaOcupada
                          ? "bg-red-100 border-red-400 text-red-500 cursor-not-allowed line-through"
                          : horaSeleccionada === hora
                          ? "bg-[#36DB75] border-[#0B1B30] text-[#0B1B30]"
                          : "bg-transparent border-gray-300 text-gray-700 hover:border-[#0B1B30]"
                      }
                    `}
                  >
                    {hora} {estaOcupada && "(Ocupado)"}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Botones */}
      <div className="flex flex-wrap items-center justify-between mt-12 w-full px-4 gap-4">
        <button
          type="button"
          onClick={onVolver}
          className="bg-[#2A78A0] hover:bg-[#1E528E] text-white font-bold text-xl px-8 py-3 rounded-full border-[3px] border-[#0B1B30] shadow-[4px_4px_0_0_rgba(11,27,48,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          Volver
        </button>

        <button
          type="button"
          disabled={!fechaSeleccionada || !horaSeleccionada}
          onClick={() => fechaSeleccionada && horaSeleccionada && onListo(fechaSeleccionada, horaSeleccionada)}
          className={`font-bold text-xl px-8 py-3 rounded-full border-[3px] transition-all
            ${
              !fechaSeleccionada || !horaSeleccionada
                ? "bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed"
                : "bg-[#36DB75] hover:bg-[#28B25C] text-[#0B1B30] border-[#0B1B30] shadow-[4px_4px_0_0_rgba(11,27,48,1)] hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer"
            }
          `}
        >
          Listo
        </button>
      </div>
    </div>
  );
}