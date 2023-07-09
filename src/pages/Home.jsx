import WoksSection from "../UI/molecules/WoksSection/WoksSection"
import { AboutMe } from "../UI/organisms/AboutMe/AboutMe"
import { BannerPrincipal } from "../UI/organisms/BannerPrincipal/BannerPrincipal"

export const Home = () => {
  return (
    <div>
        <BannerPrincipal />
        <AboutMe />
        <WoksSection />
    </div>
  )
}
