import React from "react";

interface EmailProps {
  nombre: string;
  email: string;
  mensaje: string;
  fechaTexto: string;
  hora: string;
}

export const EmailNuevoProyecto: React.FC<Readonly<EmailProps>> = ({
  nombre,
  email,
  mensaje,
  fechaTexto,
  hora,
}) => {
  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto", backgroundColor: "#0B1B30", padding: "20px", borderRadius: "12px", color: "#FFF6E9" }}>
      <h2 style={{ color: "#5EBCD0", textAlign: "center", marginBottom: "24px" }}>
        ¡Nuevo Proyecto Agendado!
      </h2>
      
      <div style={{ backgroundColor: "#FFF6E9", color: "#0B1B30", padding: "24px", borderRadius: "8px" }}>
        <p style={{ margin: "0 0 12px 0" }}><strong>👤 Cliente:</strong> {nombre}</p>
        <p style={{ margin: "0 0 12px 0" }}><strong>✉️ Email:</strong> {email}</p>
        <p style={{ margin: "0 0 20px 0" }}><strong>📅 Fecha agendada:</strong> {fechaTexto} a las {hora}</p>
        
        <p style={{ margin: "0 0 8px 0" }}><strong>💬 Mensaje / Idea del proyecto:</strong></p>
        <div style={{ backgroundColor: "#ffffff", border: "1px solid #ccc", padding: "16px", borderRadius: "6px", fontStyle: "italic" }}>
          {mensaje}
        </div>
      </div>
      
      <p style={{ textAlign: "center", marginTop: "24px", fontSize: "12px", color: "#888" }}>
        Este mensaje fue generado automáticamente desde cambialo.com
      </p>
    </div>
  );
};