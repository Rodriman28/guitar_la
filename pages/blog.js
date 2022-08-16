import Layout from "../components/Layout";
import ListadoBlog from "../components/ListadoBlog";

const Blog = ({ entradas }) => {
  return (
    <Layout page="Blog">
      <main className="contenedor">
        <ListadoBlog entradas={entradas} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  return {
    props: {
      entradas,
    },
  };
}

export default Blog;
