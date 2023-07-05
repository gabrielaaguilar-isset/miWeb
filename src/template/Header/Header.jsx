import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.Header}> 
        <nav className={styles.Header__navbar}> 
            <div className={styles.Header__containerLogo}>
                <Link to="/">
                    <img src="/logo.svg" className={styles.Header__logo} alt="logo" />
                </Link>
            </div>

            <div className={styles.Header__containerLinks}>
                <Link to="/" className={`${styles.Header__enlaces} purpleUnderlined`}>Inicio</Link>
                <Link to="/" className={`${styles.Header__enlaces} purpleUnderlined`}>Trabajos y Proyectos</Link>
                <Link to="/" className={`${styles.Header__enlaces} purpleUnderlined`}>Contacto</Link>
            </div>
        </nav>
    </header>
  )
}
