// app/actions/citas.ts
"use server";

import prisma from "@/lib/prisma";

// 1. Obtener citas ocupadas para que el calendario las marque no disponibles
export async function obtenerCitasOcupadas() {
  try {
    const citas = await prisma.cita.findMany({
      select: { fecha: true, hora: true },
    });
    return { success: true, citas };
  } catch (error) {
    console.error("Error al obtener citas:", error);
    return { success: false, citas: [] };
  }
}

// 2. Guardar la cita
export async function agendarCita(datos: {
  nombre: string;
  email: string;
  mensaje: string;
  fecha: Date;
  hora: string;
}) {
  try {
    const fechaTexto = datos.fecha.toISOString().split("T")[0];

    const cliente = await prisma.cliente.upsert({
      where: { email: datos.email },
      update: { nombre: datos.nombre },
      create: { nombre: datos.nombre, email: datos.email },
    });

    const cita = await prisma.cita.create({
      data: {
        mensaje: datos.mensaje,
        fecha: fechaTexto,
        hora: datos.hora,
        clienteId: cliente.id,
      },
    });

    return { success: true, cita };
  } catch (error: any) {
    if (error.code === "P2002") {
      return {
        success: false,
        error: "Esta hora ya fue reservada. Por favor, selecciona otro horario.",
      };
    }
    console.error("Error al guardar cita:", error);
    return { success: false, error: "Ocurrió un error al agendar la cita." };
  }
}