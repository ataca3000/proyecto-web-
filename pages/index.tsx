import React from "react";

export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: "2rem" }}>
      <h1>✨ Bienvenido a Lumi⭐Nova ✨</h1>
      <p>Tu plataforma moderna para mostrar tu negocio.</p>
      <a href="/admin" style={{ color: "#ff6600", fontWeight: "bold" }}>
        Ir al panel de administración
      </a>
    </div>
  );
}
