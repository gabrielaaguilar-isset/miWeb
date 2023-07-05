import styles from './Marquee.module.css'

export const Marquee = ({text, sentido, customClass}) => {
  return (
    
    <div className={`${styles.Marquee} ${sentido === "vertical" ? styles.Marquee_vertical : styles.Marquee_horizonal} ${customClass} `}>      
        <span className={`${styles.Marquee__contentText}`}>
            <span className="animateMaker purpleUnderlined">{text} <span className="marqueePoint whiteUnderlined">&nbsp; &bull;</span></span>
            <span className="animateMaker purpleUnderlined">{text} <span className="marqueePoint whiteUnderlined">&nbsp; &bull;</span></span>
            <span className="animateMaker purpleUnderlined">{text} <span className="marqueePoint whiteUnderlined">&nbsp; &bull;</span></span>

        </span> 
    </div>
  )
}
