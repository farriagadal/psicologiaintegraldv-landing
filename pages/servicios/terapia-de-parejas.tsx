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
        title='Terapia de Parejas'
      />
      <Content>
      <p>En el Centro Integral del Vínculo creemos firmemente que una de las dimensiones más difíciles de conversar con un otro es justamente el acto de ser pareja, acto en el cual se gestionan emociones, proyectos, metas, expectativas, acuerdos y desacuerdos. 
      <br /><br /> Es en el acto de ser pareja en donde se construye una intimidad única, en donde el profesional que la observe estará adscrito a la ética, la confidencialidad y buscará el resguardo constante a la integridad de la familia.
      Modalidades disponibles: Presencial en la comuna de  Maipú / Online</p>

<h2>¿Qué podemos atender en el centro integral del vínculo?</h2>


<ul>
  <li>Distanciamiento emocional
  </li>
  <li>Dificultades en la comunicación
  </li>
  <li>Infidelidad
  </li>
  <li>Habilidades parentales 
  </li>
  <li>Diferencias en la crianza
  </li>
  <li>Gestión del estrés 
  </li>
  <li>Crisis del desarrollo familiar
  </li>
  <li>Procesos de adaptación 
  </li>
  <li>Gestión de roles
  </li>
  <li>Etc.
  </li>
</ul>
      </Content>
      <AgendaSection />
      <br /><br /><br />
    </div>
  )
}
