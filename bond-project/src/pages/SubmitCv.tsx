import LatestJobsSection from '../components/homepage/LatestJobsSection'
import OurOfficesSection from '../components/homepage/OurOfficesSection'
import DropCVForm from '../components/ui/DropCVForm'

const SubmitCv = () => {
  return (
    <div>
        <DropCVForm />
        <LatestJobsSection />
        <OurOfficesSection />
    </div>
  )
}

export default SubmitCv