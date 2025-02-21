import Extract from 'src/components/Extract'
import FAQS from 'src/components/FAQS'
import MiniHeader from 'src/components/MiniHeader'
import Heading from 'src/components/Heading'

import HowWorks from 'src/components/HowWorks'
import OurValues from 'src/components/OurValues'
import Professionals from 'src/components/Professionals'
import AgendaSection from 'src/components/AgendaSection'
import Content from 'src/components/Content'

export default function ServicePage() {
  return (
    <div>
      <MiniHeader
        title='Psicología Infanto-Juvenil'
      />
      <Content>
      <p>En el centro integral del Vínculo ofrecemos un espacio seguro para los niños y adolescentes, en donde el juego con los más pequeños y el dialogo emocional con los más grandes serán factores importantes para comprender las preocupaciones y problemáticas del mundo infanto-juvenil.
        <br /><br />
         Como psicólogos estaremos enfocados en  su desarrollo cognitivo, el desarrollo emocional e interacciones sociales, familiares-escolares, nuestro enfoque psicológico nos permitirá comprender al paciente en todos sus ambientes por lo que la participación de un familiar significativo e incluso el contacto con la escuela serán estrategias importantes para la intervención.
      Modalidades disponibles: Presencial en la comuna de  Maipú / Online a partir de los 13 años</p>
      
      <h2>¿Qué preocupaciones podrían ser atendidas en el centro integral del Vínculo?</h2>
      <br></br>
      <ul>
        <li>Neuro-divergencias
        </li>
        <li>Cambios en el comportamiento
        </li>
        <li>Dificultades escolares
        </li>
        <li>Problemas en las relaciones familiares y sociales.
        </li>
        <li>Ansiedad</li>
        <li>Depresión</li>
        <li>Dificultades en la gestión emocional
        </li>
        <li>Cambios de hábitos de sueño y alimentación
        </li>
        <li>Separación familiar
        </li>
        <li>Duelo</li>
        <li>Bullying</li>
        <li>Dificultades de adaptación</li>
        <li>Habilidades parentales</li>
        <li>Etc.</li>
      </ul>
      </Content>
      <AgendaSection />
      <br /><br /><br />
    </div>
  )
}
