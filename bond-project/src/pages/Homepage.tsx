import HeroSection from '../components/homepage/HeroSection'
import AboutSection from '../components/homepage/AboutSection'
import SpecialistSectors from '../components/homepage/SpecialistSectors'
import WhyUs from '../components/homepage/WhyUs'
import LatestJobsSection from '../components/homepage/LatestJobsSection'
import LatestBlogsSection from '../components/homepage/LatestBlogsSection'
import OurOfficesSection from '../components/homepage/OurOfficesSection'

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SpecialistSectors />
      <LatestJobsSection />
      <WhyUs />
      <LatestBlogsSection />
      <OurOfficesSection />
    </div>

  )
}

export default Homepage