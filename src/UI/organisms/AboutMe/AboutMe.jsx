import { Marquee } from '../../atoms/Marquee/Marquee'
import MarqueeH from '../../atoms/MarqueeH/MarqueeH'
import SeparadorHr from '../../atoms/SeparadorHr/SeparadorHr'
import AboutMeSection from '../../molecules/AboutMeSection/AboutMeSection'
import styles from './AboutMe.module.css'

export const AboutMe = () => {
  return (
    <>
      <SeparadorHr banner={true} />

      <section className={styles.AboutMe}> 
        {
          screen.width < 430 ? (<MarqueeH text="SOBRE MI" />) : (<Marquee text="Sobre Mi" sentido="vertical" /> )
        }
        <AboutMeSection />
        
      </section> 
    </>
    
  )
}
