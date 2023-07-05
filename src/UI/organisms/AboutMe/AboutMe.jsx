import { Marquee } from '../../atoms/Marquee/Marquee'
import AboutMeSection from '../../molecules/AboutMeSection/AboutMeSection'
import styles from './AboutMe.module.css'

export const AboutMe = () => {
  return (
    <section className={styles.AboutMe}>
      <Marquee text="Sobre Mi" sentido="vertical" /> 
      <AboutMeSection />
      
    </section> 
  )
}
