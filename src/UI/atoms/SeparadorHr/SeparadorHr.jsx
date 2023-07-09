import styles from './SeparadorHr.module.css'

const SeparadorHr = ({banner}) => {
  return (
    <div className={`${styles.SeparadorHr} ${banner ? styles.SeparadorHr_banner : ""}`}>
        <hr className={styles.SeparadorHr_hr} />
    </div>
  )
}

export default SeparadorHr;