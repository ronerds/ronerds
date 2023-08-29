import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div
      style={{
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
        <h1 style={{ color: "#ffffff", fontSize: "36px", fontWeight: "bold" }}>
          Professor Ronaldo Lavestein
        </h1>
      </div>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            color: "#333333",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          ETEC Dr. Francisco Nogueira de Lima
        </p>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={{
            backgroundColor: "#3498db",
            color: "#ffffff",
            border: "1px solid #3498db",
            borderRadius: "4px",
            padding: "10px 30px",
            cursor: "pointer",
            marginRight: "10px",
            transition: "background-color 0.3s ease",
            width: "120px",
            whiteSpace: "nowrap",
          }}
          onClick={() => {
            window.open("/PCII.pdf", "_blank");
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
          PCII
        </button>
        <button
          style={{
            backgroundColor: "#3498db",
            color: "#ffffff",
            border: "1px solid #3498db",
            borderRadius: "4px",
            padding: "10px 30px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            width: "120px",
            whiteSpace: "nowrap",
          }}
          onClick={() => {
            window.open("/MaterialTCC.pdf", "_blank");
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
          PTCC
        </button>
      </div>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <Link href="/sobre" passHref>
          <button
            style={{
              backgroundColor: "#3498db",
              color: "#ffffff",
              border: "1px solid #3498db",
              borderRadius: "4px",
              padding: "10px 30px",
              cursor: "pointer",
              marginLeft: "10px",
              transition: "background-color 0.3s ease",
              width: "120px",
              whiteSpace: "nowrap",
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
            Sobre
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
