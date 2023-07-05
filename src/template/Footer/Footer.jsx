import { Link } from "react-router-dom"

export const Footer = () => {
    const year= new Date();
    const actualYear = year.getFullYear(); 

  return (
    <div className="footer">
        <h3 className="footerFarewell purpleUnderlined">Si quieres saber más sobre mí, mis habilidades y mis experiencias, puedes escribirme un correo o visitar mi perfil de Linkedin. Me encanta crear soluciones web innovadoras y eficientes. ¿Hablamos? 😊😊</h3>

        <hr className="SeparatorHr"/>
        <div className="footer__final">
            <div >
                <Link to="https://www.linkedin.com/in/gabriela-aguilar01/" className="socialMedia purpleUnderlined">Linkedin</Link>
                <Link to="#" className="socialMedia purpleUnderlined">Email</Link>
            </div>
            <div >
                <p className="footer__copyr purpleUnderlined">Gabriela Aguilar © {actualYear}</p>
            </div>
        </div>
    </div>
  )
}
