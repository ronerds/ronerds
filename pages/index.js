import React, { useRef, useEffect } from "react";
import Link from "next/link";

function Home() {
  const buttonRef = useRef(null);

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/PCII.pdf";
    link.download = "PCII.pdf";
    link.click();
  };

  const handleOpenPDF = () => {
    window.open("/PCII.pdf", "_blank");
  };

  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    let maxWidth = 0;

    buttons.forEach((button) => {
      const { offsetWidth } = button;
      if (offsetWidth > maxWidth) {
        maxWidth = offsetWidth;
      }
    });

    buttons.forEach((button) => {
      button.style.width = `${maxWidth}px`;
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "40px",
        textAlign: "center",
        fontFamily: "PT Sans, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#333333",
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        Professor Ronaldo Lavestein
      </h1>
      <p style={{ color: "#333333", fontSize: "18px", marginBottom: "20px" }}>
        ETEC Dr. Francisco Nogueira de Lima
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button
          ref={buttonRef}
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
          onClick={handleDownloadPDF}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#ffffff";
            e.target.style.color = "#3498db";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#3498db";
            e.target.style.color = "#ffffff";
          }}
        >
          Baixar PDF
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
          onClick={handleOpenPDF}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#ffffff";
            e.target.style.color = "#3498db";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#3498db";
            e.target.style.color = "#ffffff";
          }}
        >
          Abrir PDF
        </button>
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
