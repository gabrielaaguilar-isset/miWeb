import styles from './Paragraph.module.css'

const Paragraph = ({text, customClass, insertHTML = false}) => {
 return(
  <>
  {
    insertHTML ? (
      <p dangerouslySetInnerHTML={{__html: text}} className={`${styles.Paragraph} ${customClass}`}></p>

    ):(
      <p className={`${styles.Paragraph} ${customClass}`}>{text}</p>

    )
  }
  </>

 )
  
}

export default Paragraph;