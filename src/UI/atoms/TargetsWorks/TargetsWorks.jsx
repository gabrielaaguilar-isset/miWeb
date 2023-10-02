import { useState } from 'react'
import styles from './TargetsWorks.module.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TargetsWorks = () => {
    const [works, setWorks] = useState();

    useEffect(() => {
        fetch("/works.json")
        .then(res => res.json())
        .then(json => {
            setWorks(json)
        })
      }, []);

    return (

   
    <div className={styles.TargetsWorks}>
            {
                works?.map((content, index) =>{ 
                    console.log(content.teconologias)
                    return(


                        <>
                            <div key={index} className={styles.TargetsWorks_container}>
                            
                                <div className={`${styles.targetsWorks_items} ${styles.itemp} ${styles.tecnologiasItems}`}>
                                    
                                    <p className={`${styles.targetsWorks_p} whiteUnderlined`} > {content.teconologias}  </p>
                                    
                                </div>

                                <div className={styles.targetsWorks_items}>
                                    <img src={content.img_Proyect} alt={content.nameProject} className={styles.works_img} />
                                </div>
                                
                                <div className={`${styles.targetsWorks_items} img--works`} >
                                {
                                        content.teconologias_fotos?.map((item, index) =>{
                                            return (
                                                <img key={index} src={item} alt={item} className={styles.targetsWorks_img}/>
                                            )
                                        })
                                    }
                                    
                                </div>

                                <div className={styles.targetTittle_container}>
                                    <h2 ><Link to={content.url} target="_blank" className={`${styles.tartetTittle_h2 } whiteUnderlined`}>{content.nameProject}</Link></h2>
                                <span className={`${styles.tartetTittle_point} purpleUnderlined`}>&nbsp; &bull;</span>
                                    <p className={`${styles.tartetTittle_p} whiteUnderlined`} >{content.type}</p>
                                </div>
                            </div>

                           
                        </>

                       
                        
                    )

                })
            }
             
    </div>
  )
}

export default TargetsWorks