import Link from "next/link";
function Sobre() {
  return (
    <div>
      <h1>Sobre: página do professor Ronaldo Lavestein</h1>
      <h4>Curso Técnico em Informática - PCII - Escola Industrial</h4>
      <Link href="/sobre.js">
        <a>Voltar</a>
      </Link>
    </div>
  );
}

export default Sobre;
