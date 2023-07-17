import React from "react";
import Link from "next/link";

function Home() {
  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/PCII.pdf";
    link.download = "PCII.pdf";
    link.click();
  };

  const handleOpenPDF = () => {
    window.open("/PCII.pdf", "_blank");
  };

  return (
    <div>
      <h1>Primeiro projeto:</h1>
      <h4>Página criada usando Node.JS, Next.JS e React</h4>
      <button onClick={handleDownloadPDF}>Baixar PDF</button>
      <button onClick={handleOpenPDF}>Abrir PDF</button>
      <p>
        <Link href="/sobre">Sobre</Link>
      </p>
    </div>
  );
}

export default Home;
