import { BannerSection } from '../../molecules/BannerSection/BannerSection'
import styles from './BannerPrincipal.module.css'

export const BannerPrincipal = () => {
  return (
    <section className={styles.BannerPrincipal}>
      <BannerSection />
    </section>
  )
}
