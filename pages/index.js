import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";

export default function Home({ guitarras, curso }) {
  return (
    <div>
      <Layout page="Inicio">
        <main className="contenedor">
          <h1 className="heading">Nuestra coleccion</h1>
          <Listado guitarras={guitarras} />
        </main>
        <Curso curso={curso} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:asc`;
  const urlCurso = `${process.env.API_URL}/cursos`;

  const [resGuitarras, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
  ]);

  const [guitarras, curso] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
  ]);

  return {
    props: {
      guitarras,
      curso,
    },
  };
}
