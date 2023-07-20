import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
    const [animate, setAnimate] = useState(false);
    const [stiky, setStiky] = useState(false);


  const headerRef = useRef(null); // Referencia al elemento header

  useEffect(() => {
    const menu = headerRef.current;
    const altura = menu.offsetTop;
    let scrollPos = 0;

    const handleScroll = () => {
      if (document.body.getBoundingClientRect().top > scrollPos) {
        setStiky(true)
      } else {
        setStiky(false)
        

      }
      scrollPos = document.body.getBoundingClientRect().top;

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    

  return (
    <header ref={headerRef} className={`${styles.Header} ${stiky ? styles.Header_stiky : ''}`}>

      <nav className={styles.Header__navbar}>
        <div className={styles.Header__containerLogo}>
          <Link to="/">
            <img src="/logo.svg" className={styles.Header__logo} alt="logo" />
          </Link>
        </div>
        <div className={`${styles.Header__navBar} ${animate ? styles.Header__navBar_animate : ''}`}>
            <Link to="/" className={`${styles.Header__enlaces} purpleUnderlined`}>Inicio</Link>
            <Link to="/#" className={`${styles.Header__enlaces} purpleUnderlined`}>Sobre Mi</Link>
            <Link to="/#" className={`${styles.Header__enlaces} purpleUnderlined`}>Trabajos y Proyectos</Link>
            <span onClick={() => setAnimate(!animate)} className={styles.Header__btnMobile}>Cerrar</span>

        </div>
        <span onClick={() => setAnimate(!animate)} className={styles.Header__btnMobile}><img src="/menu.png" className={styles.menuIcon}/></span>

        
      </nav>
    </header>
  );
};
