import styles from "../styles/Curso.module.css";

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso;

  return (
    <section>
      <div className="contenedor">
        <div>
          <h2>{titulo}</h2>
          <p>{contenido}</p>

          <a href="#">Mas informacion</a>
        </div>
      </div>

      <style jsx>
        {`
          section {
            background-color: red;
          }
        `}
      </style>
    </section>
  );
};

export default Curso;
