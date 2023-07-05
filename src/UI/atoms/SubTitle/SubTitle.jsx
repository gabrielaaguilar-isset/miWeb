/* eslint-disable react/prop-types */
import styles from './SubTitle.module.css'

const SubTitle = ({text, customClass}) => {
  return (
    <h2 dangerouslySetInnerHTML={{__html: text}} className={`${styles.SubTitle} ${customClass}`}></h2>
  )
}

export default SubTitle;


