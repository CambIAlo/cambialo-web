"use server";

import prisma from "@/lib/prisma";
import { Resend } from "resend";
import { EmailNuevoProyecto } from "@/components/emails/EmailNuevoProyecto"; // <-- Importas tu plantilla

const resend = new Resend(process.env.RESEND_API_KEY);

export async function obtenerCitasOcupadas() {
  // ... (tu código intacto)
}

export async function agendarCita(datos: {
  nombre: string;
  email: string;
  mensaje: string;
  fecha: Date;
  hora: string;
}) {
  try {
    const fechaTexto = datos.fecha.toISOString().split("T")[0];

    // 1. Guardar en la Base de Datos
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

    // 2. Enviar el correo usando el componente limpio
    await resend.emails.send({
      from: 'CámbiAlo Web <onboarding@resend.dev>', 
      to: 'maykelyork@gmail.com', 
      subject: `Nuevo Proyecto de ${datos.nombre}`,
      react: EmailNuevoProyecto({ 
        nombre: datos.nombre,
        email: datos.email,
        mensaje: datos.mensaje,
        fechaTexto: fechaTexto,
        hora: datos.hora
      }),
    });

    return { success: true, cita };
  } catch (error: any) {
    if (error.code === "P2002") {
      return {
        success: false,
        error: "Esta hora ya fue reservada. Por favor, selecciona otro horario.",
      };
    }
    console.error("Error al guardar cita o enviar correo:", error);
    return { success: false, error: "Ocurrió un error al agendar la cita." };
  }
}