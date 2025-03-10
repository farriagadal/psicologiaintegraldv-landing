import MiniHeader from 'src/components/MiniHeader'
import AgendaSection from 'src/components/AgendaSection'
import Content from 'src/components/Content'

export default function ServicePage() {
  return (
    <div>
      <MiniHeader
        title='Terapia de familias'
        imgUrl='/images/bg-2.jpg'
      />
      <Content>
      <p style={{textAlign: 'center', marginBottom: 0}}>En nuestro enfoque como centro entendemos que la familia es el núcleo inicial de las interacciones humanas, es ahí donde se crean patrones de vinculación, se obtienen muchas de las primeras herramientas para la gestión emocional, a través de los padres se adquiere los patrones de apego y se gesta las primeras ideas de socialización.
        <br/><br/>
        Es por eso que ante familias que presentan cambios importantes, conflictos frecuentes, problemáticas de conductas, situaciones de crisis, ofrecemos intervenciones con toda la familia, ya sea con todos los integrantes o con algunos.
        <br/><br/>Modalidades disponibles: Presencial en la comuna de  Maipú / Online</p>
      </Content>
      <AgendaSection />
      <br /><br /><br />
    </div>
  )
}
