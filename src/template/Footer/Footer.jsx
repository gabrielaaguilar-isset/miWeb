import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

export const Footer = () => {
    const year= new Date();
    const actualYear = year.getFullYear(); 

  return (
    <div className={styles.footer}>
        <h3 className={`${styles.footerFarewell} purpleUnderlined`}>Si quieres saber más sobre mí, mis habilidades y mis experiencias, puedes escribirme un correo o visitar mi perfil de Linkedin. Me encanta crear soluciones web innovadoras y eficientes. ¿Hablamos? 😊😊</h3>

        <hr className={styles.hrFooter} />
        <div className={styles.footer__final}>
            <div >
                <Link to="https://www.linkedin.com/in/gabriela-aguilar01/" className={`${styles.socialMedia}  purpleUnderlined` }>Linkedin</Link>
                <Link to="#" className={`${styles.socialMedia}  purpleUnderlined` }>Email</Link>
            </div>
            <div >
                <p className={`${styles.footer__copyr} purpleUnderlined`}>Gabriela Aguilar © {actualYear}</p>
            </div>
        </div>
    </div>
  )
}
