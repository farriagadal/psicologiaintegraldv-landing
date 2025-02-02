import Extract from 'src/components/Extract'
import FAQS from 'src/components/FAQS'
import Heading from 'src/components/Heading'
import HowWorks from 'src/components/HowWorks'
import OurValues from 'src/components/OurValues'

export default function Home() {
  return (
    <div>
      <Heading />
      <Extract />
      <HowWorks />
      <OurValues />
      <FAQS />
      <br /><br /><br />
    </div>
  )
}
