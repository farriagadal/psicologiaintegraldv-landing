import MiniHeader from 'src/components/MiniHeader'
import AgendaSection from 'src/components/AgendaSection'
import Content from 'src/components/Content'

export default function ServicePage() {
  return (
    <div>
      <MiniHeader
        title='Talleres Grupales y Charlas'
        imgUrl='/images/bg-3.jpg'
      />
      <Content>
      <p style={{textAlign: 'center', marginBottom: 0}}>En centro integral del vínculo entendemos que las interacciones sociales son imprescindibles en la construcción y en la acción de ser persona, es por eso que se imparten talleres grupales en el cual se abordan diferentes problemáticas, ya sea individuales, familiares o de pareja.
        <br/><br/>Así mismo, las charlas de nuestros profesionales comparten información que buscan generar diferentes herramientas para abordar variadas problemáticas del ser humano.</p>
      </Content>
      <AgendaSection />
      <br /><br /><br />
    </div>
  )
}
