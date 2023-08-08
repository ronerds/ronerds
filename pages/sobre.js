import React from "react";
import Link from "next/link";

function Sobre() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "40px",
        textAlign: "center",
        fontFamily: "PT Sans, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#3498db",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <p style={{ color: "#ffffff", fontSize: "36px", fontWeight: "bold" }}>
          Professor Ronaldo Lavestein
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <p style={{ color: "#333333", fontSize: "24px", marginBottom: "10px" }}>
          Curso Técnico em Informática
        </p>
        <p style={{ color: "#333333", fontSize: "18px", marginBottom: "10px" }}>
          ETEC Dr. Francisco Nogueira de Lima - Casa Branca
        </p>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Link href="/" passHref>
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
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.color = "#3498db";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#3498db";
              e.target.style.color = "#ffffff";
            }}
          >
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Sobre;
