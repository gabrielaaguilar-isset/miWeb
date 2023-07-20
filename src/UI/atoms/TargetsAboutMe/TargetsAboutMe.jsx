import { useRef } from "react";
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
   }, []);


  const slideshow = useRef(null);

  const siguiente = () => {
    const targetas = slideshow.current; 
     
    if(targetas.children.length > 0){
        const primerElemento = targetas.children[0];

        const widthTargeta = primerElemento.offsetWidth;
        targetas.style.transition = `300ms ease-out all`;
        targetas.style.transform = `translateX(-${widthTargeta}px)`;

        const transicion= () => {
          targetas.style.transition = 'none';
          targetas.style.transform = `translateX(0)`;

          targetas.appendChild(primerElemento);
          targetas.removeEventListener('transitionend', transicion)
        }
        
        targetas.addEventListener('transitionend', transicion);
      }
  }

  const previos = () => {
    const targetas = slideshow.current; 
       
    if(targetas.children.length > 0){
        const index = targetas.children.length - 1;
        const ultimoElemento = targetas.children[index];

        targetas.insertBefore(ultimoElemento, targetas.firstChild);
        
        const widthTargeta = targetas.children[0].offsetWidth;

        targetas.style.transition = 'none';
        targetas.style.transform = `translateX(-${widthTargeta}px)`;

        setTimeout(() => {
          targetas.style.transition = '300ms ease-out all';
          targetas.style.transform = `translateX(0)`;
        }, 30);
    } 

  }


  
  

  
  return (
    
    
      <>
        <div className={styles.TargetsAboutMe}>
          <div className={styles.TargetsAboutMe_container} ref={slideshow}>
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

        <div className={styles.ButtonsCards}>
            <button
            onClick={() => previos()}
            ><img src="/flecha.png" alt="previo" className={styles.buttonAnterior}/></button>

            <button
            onClick={ () => siguiente() }
            ><img src="/flecha.png" alt="previo" className={styles.buttonSiguiente}/></button>

         </div>
      </>
    
    
  )
}

export default TargetsAboutMe;