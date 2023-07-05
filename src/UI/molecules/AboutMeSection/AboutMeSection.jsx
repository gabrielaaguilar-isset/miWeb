import { Marquee } from '../../atoms/Marquee/Marquee'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import styles from './AboutMeSection.module.css'

const AboutMeSection = () => {

  const mySkills = [
    { path: '/html.png', title: 'Html logo' },
    { path: '/css.png', title: 'Css logo' },
    { path: '/js.png', title: 'Js logo' },
    { path: '/mongodb.png', title: 'MongoDB logo' },
    { path: '/mysql.png', title: 'Mysql logo' },
    { path: '/react.png', title: 'React logo' },
    { path: '/express.png', title: 'Express logo' },
    { path: '/wordpress.png', title: 'Wordpress logo' },
    { path: '/photoshop.png', title: 'Photoshop logo' },
    { path: '/php.png', title: 'Php logo' }
  ]

  return (
  
    <div className={styles.AboutMeSection}>
      <div className={styles.AboutMeSection__Description}>
        <div className={styles.AboutMeSection__DescriptionText}>
          <Paragraph customClass="whiteUnderlined whiteP" text="Soy una desarrolladora web de 22 años especializada en crear soluciones digitales innovadoras y atractivas. Manejo las últimas tecnologías y herramientas del mercado, como React, Express, Next Js, MongoDB, MySQL, WordPress, Woocommerce, E-learning y conocimientos basico con PHP y Photoshop. Me apasiona la programación, el diseño y el aprendizaje continuo. Me gusta trabajar en equipo y enfrentarme a nuevos retos. Mi objetivo es seguir creciendo como desarrolladora web y ofrecer soluciones que satisfagan las necesidades y expectativas de mis clientes."/>
          
        </div>
        <div className={styles.AboutMeSection__ContentImages}>
          {
            mySkills.map((content, index) => {
              return(
                  <img key={index} src={content.path} alt={content.title} className="img-items whiteUnderlined" />
              )
            })
          }
        </div>
      </div>
      <div className={styles.AboutMeSection__Targets}>

        <div className={styles.AboutMeSection__TargetsContainer}>
          <Paragraph customClass="purpleUnderlined targetsP" text='<span class="purpleUnderlined targetsSpan">Técnico Superior Universitario en Informática -</span> Instituto Universitario de Tecnología &quot;Antonio Ricaurte &ldquo;' insertHTML={true}  />
          
          <Paragraph insertHTML={true} customClass="purpleUnderlined targetsP" text='ID CREDENCIAL: <span class="purpleUnderlined targetsSpan">VSN DJS DKJ</span>'/>
        </div>

        <div className="targets__container">
          <p className="purpleUnderlined targetsP">
            <span className="purpleUnderlined targetsSpan">Técnico Superior Universitario en Informática -</span> Instituto Universitario de Tecnología &quot;Antonio Ricaurte &ldquo;
          </p>
          <p className="purpleUnderlined targetsP">ID CREDENCIAL: <span className="purpleUnderlined targetsSpan">VSN DJS DKJ</span></p>
        </div>

        <div className="targets__container">
          <p className="purpleUnderlined targetsP">
            <span className="purpleUnderlined targetsSpan">Técnico Superior Universitario en Informática -</span> Instituto Universitario de Tecnología &quot;Antonio Ricaurte &ldquo;
          </p>
          <p className="purpleUnderlined targetsP">ID CREDENCIAL: <span className="purpleUnderlined targetsSpan">VSN DJS DKJ</span></p>
        </div>

        <div className="target__gabrielaContainer">
          <div className="target--bg">
            <img src="/oficial-portfolio.png" className="gabyImg" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default AboutMeSection