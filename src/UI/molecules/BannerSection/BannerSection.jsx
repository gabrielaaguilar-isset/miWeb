import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import SubTitle from '../../atoms/SubTitle/SubTitle'
import styles from './BannerSection.module.css'

export const BannerSection = () => {
    return (
        <div className={styles.BannerSection}>

            <div className={styles.BannerSection__tittleContainer}>
                <div className={styles.BannerSection__welcomeContainer}>
                    <Paragraph text="Bienvenido, mi nombre es" customClass="whiteUnderlined" />
                    <Heading text="Gabriela Aguilar" customClass={`${styles.BannerSection__title} whiteUnderlined`} />
                </div>

            </div>

            <div className={`${styles.BannerSection__welcomeH2}`}>
                <SubTitle customClass="purpleUnderlined" text="Web <br />Developer"/>
            </div>

        </div>
    )
}
