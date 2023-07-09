import ImgGaby from '../../atoms/ImgGaby/ImgGaby'
import { Marquee } from '../../atoms/Marquee/Marquee'
import SeparadorHr from '../../atoms/SeparadorHr/SeparadorHr'
import AboutMeSection from '../../molecules/AboutMeSection/AboutMeSection'
import styles from './AboutMe.module.css'

export const AboutMe = () => {
  return (
    <>
      <SeparadorHr banner={true} />
      
      <section className={styles.AboutMe}>
        <Marquee text="Sobre Mi" sentido="vertical" /> 
        <AboutMeSection />
        
      </section> 
    </>
    
  )
}
