import React from "react";
import Link from "next/link";

function Sobre() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "40px",
        textAlign: "center",
        fontFamily: "Verdana, sans-serif",
      }}
    >
      <p
        style={{
          color: "#333333",
          fontSize: "28px",
          marginBottom: "20px",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Programação de Computadores II
      </p>
      <p style={{ color: "#333333", fontSize: "20px", marginBottom: "20px" }}>
        Curso Técnico em Informática
      </p>
      <p style={{ color: "#333333", fontSize: "18px", marginBottom: "20px" }}>
        Professor Ronaldo Lavestein - Escola Industrial - Casa Branca
      </p>
      <Link href="/">
        <button
          style={{
            backgroundColor: "#3498db",
            color: "#ffffff",
            border: "1px solid #3498db",
            borderRadius: "4px",
            padding: "10px 20px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Voltar
        </button>
      </Link>
    </div>
  );
}

export default Sobre;
