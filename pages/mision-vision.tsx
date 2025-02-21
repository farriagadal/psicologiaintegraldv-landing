import Extract from 'src/components/Extract'
import FAQS from 'src/components/FAQS'
import MiniHeader from 'src/components/MiniHeader'
import Heading from 'src/components/Heading'

import HowWorks from 'src/components/HowWorks'
import OurValues from 'src/components/OurValues'
import Professionals from 'src/components/Professionals'
import AgendaSection from 'src/components/AgendaSection'
import Content from 'src/components/Content'

export default function MisionVisionPage() {
  return (
    <div>
      {/* <Heading /> */}
      <MiniHeader
        title='Misión y Visión'
      />
      <Content>
      <h2>Visión:</h2>
      <p>En nuestro centro entendemos que gran parte del ser persona es construido a través de sus relaciones, es por eso que buscamos contribuir activamente en la gestión de herramientas que faciliten el bienestar y salud mental de las personas, el cual será comprendido como un sistema dinámico de interacción (Familia, escuela, amigos, pareja, etc.) principalmente desde un enfoque sistémico e integral, ofreciendo un espacio de acompañamiento terapéutico donde se fortalezcan los vínculos, la comunicación y los recursos emocionales. Buscamos generar cambios positivos y sostenibles que permitan a las personas afrontar sus desafíos vitales
      </p>
      <h2>Misión:</h2>
      <p>Facilitar el bienestar mental a través de atenciones e intervenciones  psicológicas, desde el campo clínico como Psicoterapia individual, familiar y de parejas como también en el área escolar y laboral a través de charlas y talleres, ofreciendo un espacio seguro donde las personas puedan fortalecer sus vínculos, mejorar su comunicación y encontrar soluciones a sus dificultades. Nos enfocamos en intervenciones basadas en la evidencia, con un equipo comprometido en acompañar a las familias en su proceso de transformación y bienestar.</p>
      </Content>
      <AgendaSection />
      <br /><br /><br />
    </div>
  )
}
