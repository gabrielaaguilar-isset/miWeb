import MarqueeH from '../../atoms/MarqueeH/MarqueeH'
import TargetsWorks from '../../atoms/TargetsWorks/TargetsWorks'
import styles from './WoksSection.module.css'

const WoksSection = () => {
  return (
    <div className={styles.WoksSection}>
        <MarqueeH text="TRABAJOS Y PROYECTOS"/>
        <TargetsWorks />
    </div>
  )
}

export default WoksSection