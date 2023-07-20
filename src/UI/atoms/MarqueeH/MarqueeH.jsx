import styles from './MarqueeH.module.css'

const MarqueeH = ({text}) => {
  return (
    <div className={styles.MarqueeH}>
        <div className={`${styles.marquee} ${styles.marqueeH}`} >  
              <div className={styles.marquee__containerH}>
                    <p className={`${styles.marquee_textH} purpleUnderlined`}>{text}<span className="marqueePoint whiteUnderlined">&nbsp; &bull;</span> {text} <span className="marqueePoint whiteUnderlined">&nbsp; &bull;</span>  </p> 
              </div>
          </div>
    </div>
  )
}

export default MarqueeH