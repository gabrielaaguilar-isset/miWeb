
import Paragraph from "../Paragraph/Paragraph"
import styles from './TargetsAboutMe.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const TargetsAboutMe = () => {


  const [certificadosJson, setCertificadosJson] = useState();

  
  useEffect(() => {
     fetch("/certificates.json")
     .then(res => res.json())
     .then(json => {
       setCertificadosJson(json)
     })
   }, [])
  

  return (
    
      <div className={styles.TargetsAboutMe}>
        <div className={styles.TargetsAboutMe_container}>
            {
              certificadosJson?.map((content, index) =>{
                return(
                  <div key={index} className={styles.TargetsAboutMe_targets}>
                      <Paragraph customClass={`${styles.purpleUnderlined} ${styles.targetsP}`} text={`${content.name} - ${content.company}`}insertHTML={true}  />
                      
                      <Paragraph insertHTML={true} customClass={`${styles.TargetsAboutMe_credenciales} ${styles.targetsP} purpleUnderlined `} text={content.id_credencial}/>
                  </div>
                )
              })
            }
        </div>
      </div>
    
    
  )
}

export default TargetsAboutMe;