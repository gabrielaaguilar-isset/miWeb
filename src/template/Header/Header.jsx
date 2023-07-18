import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.Header}> 
        <nav className={styles.Header__navbar}> 

                
                <div className={styles.Header__containerLogo}>
                    <Link to="/">
                        <img src="/logo.svg" className={styles.Header__logo} alt="logo" />
                    </Link>
                </div>

                    <Link to="/" className={`${styles.Header__enlaces} purpleUnderlined`}>Menu</Link>
                    
                


            

                <input className={styles.menu_icon} type="checkbox" id="menu_icon" name="menu_icon"/>
                    <label htmlFor="menu_icon"></label>

                    <div className={styles.nav}> 		
                        <ul className={styles.pt_5}>
                            <li><Link to="#">Work</Link></li>
                            <li><Link to="#">Studio</Link></li>
                            <li><Link to="#">News</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>

        </nav>

      

    </header>
  )
}
