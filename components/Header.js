import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = ({ guitarra }) => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a>
              <Image width={400} height={100} src="/img/logo.svg" alt="Logo" />
            </a>
          </Link>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>

        {guitarra && (
          <div className={styles.modelo}>
            <h1>Modelo {guitarra.nombre}</h1>
            <p>{guitarra.descripcion}</p>
            <p>${guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
