import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout page="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              quia maxime rerum doloribus, quae praesentium obcaecati ipsam vero
              eligendi enim hic mollitia. Quaerat error dolore magni perferendis
              tenetur eligendi ullam. Laboriosam illum perferendis quod
              provident officia ducimus omnis blanditiis ullam! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Modi molestiae
              necessitatibus laboriosam nemo nostrum iste officiis, quod
              consequatur delectus ut saepe dolorem repellat, recusandae, ab
              culpa repellendus sed non ratione ad aspernatur nulla magnam eum
              quidem? Facilis animi dolorum impedit!
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
