// import './App.css'
import './assets/style.css'
import HomeAbout from './component/Home-About'
import HomeBanner from './component/home-banner'
import HomeBannerBtm from './component/Home-Banner-Btm'
import HomeDestination from './component/Home-Destination'
import HomePopularTour from './component/Home-Popula-Tour'
import HomeAttraction from './component/Home-Attraction'
import HomeDetails from './component/Home-Details'
import HomeHowReach from './component/Home-How-Reach'
import HomeFaqs from './component/Home-Faqs'


function App() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <HomeBannerBtm></HomeBannerBtm>
      <HomeAbout></HomeAbout>
      <HomePopularTour></HomePopularTour>
      <HomeDestination></HomeDestination>
      <HomeAttraction></HomeAttraction>
      <HomeDetails></HomeDetails>
      <HomeHowReach></HomeHowReach>
      <HomeFaqs></HomeFaqs>
    </>
  )
}

export default App
