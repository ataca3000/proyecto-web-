import React, { useState } from "react";

export default function Admin() {
  const [title, setTitle] = useState("Lumi⭐Nova");
  const [description, setDescription] = useState("Plataforma moderna para mostrar tu negocio");

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>⚙️ Panel de Administración</h1>
      <label>
        Título:{" "}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ margin: "0.5rem" }}
        />
      </label>
      <br />
      <label>
        Descripción:{" "}
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ margin: "0.5rem" }}
        />
      </label>
      <br />
      <button style={{ marginTop: "1rem", background: "#ff6600", color: "white", padding: "0.5rem 1rem" }}>
        Guardar cambios
      </button>

      <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
        <h2>Vista previa:</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
