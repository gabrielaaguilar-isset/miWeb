import styles from "./buttonsCards.module.css";

export const ButtonsCards = () => {
    
    const previos = () => {
        console.log('queloque p');
    } 
    const siguiente = () => {
        console.log('queloque S');
    }


  return (
    <div className={styles.ButtonsCards}>
        <button
        onClick={() => previos()}
        ><img src="/flecha.png" alt="previo" className={styles.buttonAnterior}/></button>

        <button
        onClick={ () => siguiente() }
        ><img src="/flecha.png" alt="previo" className={styles.buttonSiguiente}/></button>

    </div>
  )
}
