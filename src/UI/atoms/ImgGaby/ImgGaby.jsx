import styles from './ImgGaby.module.css'

const ImgGaby = () => {
  return (
    <div>
        <div className={styles.target__gabrielaContainer}>
          
            <div className={styles.target_bg}>
                <img src="/oficial-portfolio.png" className={styles.gabyImg}/>
            </div> 
        </div>
    </div>
  )
}

export default ImgGaby