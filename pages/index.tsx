import Extract from 'src/components/Extract'
import FAQS from 'src/components/FAQS'
import Heading from 'src/components/Heading'

import HowWorks from 'src/components/HowWorks'
import OurValues from 'src/components/OurValues'
import Professionals from 'src/components/Professionals'
import AgendaSection from 'src/components/AgendaSection'

export default function Home() {
  return (
    <div>
      <Heading />
      {/* <Heading2 /> */}
      {/* <Extract /> */}
      <HowWorks />
      <FAQS />
      <Professionals />
      <AgendaSection />
      <br /><br /><br />
    </div>
  )
}
