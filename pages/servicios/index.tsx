import Extract from 'src/components/Extract'
import FAQS from 'src/components/FAQS'
import MiniHeader from 'src/components/MiniHeader'
import Heading from 'src/components/Heading'

import HowWorks from 'src/components/HowWorks'
import OurValues from 'src/components/OurValues'
import Professionals from 'src/components/Professionals'
import AgendaSection from 'src/components/AgendaSection'
import Content from 'src/components/Content'

export default function ServicesPage() {

  const items = [
    {
      title: 'Psicología Adulto',
      desc: 'En el Centro integral del vínculo entendemos que iniciar un proceso psicológico es una decisión importante , es por eso que estamos enfocados en atender las necesidades de cada paciente apegados a una estructura ética que asegure la confidencialidad, resguardando tanto los datos del paciente como también la historia a través del relato.'
    },
    {
      title: 'Psicología Infanto-Juvenil',
      desc: 'En el centro integral del Vínculo ofrecemos un espacio seguro para los niños y adolescentes, en donde el juego con los más pequeños y el dialogo emocional con los más grandes serán factores importantes para comprender las preocupaciones y problemáticas del mundo infanto-juvenil. Como psicólogos estaremos enfocados en  su desarrollo cognitivo, el desarrollo emocional e interacciones sociales, familiares-escolares, nuestro enfoque psicológico nos permitirá comprender al paciente en todos sus ambientes por lo que la participación de un familiar significativo e incluso el contacto con la escuela serán estrategias importantes para la intervención.'
    },
    {
      title: 'Terapia de Parejas',
      desc: 'En el Centro Integral del Vínculo creemos firmemente que una de las dimensiones más difíciles de conversar con un otro es justamente el acto de ser pareja, acto en el cual se gestionan emociones, proyectos, metas, expectativas, acuerdos y desacuerdos. Es en el acto de ser pareja en donde se construye una intimidad única, en donde el profesional que la observe estará adscrito a la ética, la confidencialidad y buscará el resguardo constante a la integridad de la familia.'
    },
    {
      title: 'Talleres Grupales y Charlas',
      desc: 'En centro integral del vínculo entendemos que las interacciones sociales son imprescindibles en la construcción y en la acción de ser persona, es por eso que se imparten talleres grupales en el cual se abordan diferentes problemáticas, ya sea individuales, familiares o de pareja. Así mismo, las charlas de nuestros profesionales comparten información que buscan generar diferentes herramientas para abordar variadas problemáticas del ser humano.'
    },
    {
      title: 'Terapia de familias',
      desc: 'En nuestro enfoque como centro entendemos que la familia es el núcleo inicial de las interacciones humanas, es ahí donde se crean patrones de vinculación, se obtienen muchas de las primeras herramientas para la gestión emocional, a través de los padres se adquiere los patrones de apego y se gesta las primeras ideas de socialización. Es por eso que ante familias que presentan cambios importantes, conflictos frecuentes, problemáticas de conductas, situaciones de crisis, ofrecemos intervenciones con toda la familia, ya sea con todos los integrantes o con algunos.'
    },
  ]

  return (
    <div>
      {/* <Heading /> */}
      <MiniHeader
        title='Servicios'
      />
      <Content>
d
      </Content>
      <AgendaSection />
      <br /><br /><br />
    </div>
  )
}
