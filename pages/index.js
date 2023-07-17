import Link from "next/link";
function Home() {
  return (
    <div>
      <h1>Primeiro projeto:</h1>
      <h4>Página criada usando Node.JS, Next.JS e React</h4>
      <Link href="/sobre.js">
        <a>Acessar página Sobre</a>
      </Link>
    </div>
  );
}

export default Home;
