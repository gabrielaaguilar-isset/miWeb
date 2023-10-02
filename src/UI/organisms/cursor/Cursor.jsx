import styles from './Cursor.module.css';
import { useState } from 'react';

export const Cursor = () => {
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    })
  return (
    <>
        
    
        <div className={styles.Cursor_outline} style={{
            left: cursorX + 'px',
            top:cursorY + 'px',

        }} >
        <div className={styles.Cursor}></div>
        </div>
  
    </>
  )
}
