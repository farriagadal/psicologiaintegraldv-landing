
import MiniHeader from 'src/components/MiniHeader'
import AgendaSection from 'src/components/AgendaSection'
import Content from 'src/components/Content'

export default function ServicePage() {
  return (
    <div>
      {/* <Heading /> */}
      <MiniHeader
        title='Psicología Adulto'
        imgUrl='/images/bg-1.jpg'
      />
      <Content>
      <p className='resume'>En el Centro integral del vínculo entendemos que iniciar un proceso psicológico es una decisión importante , es por eso que estamos enfocados en atender las necesidades de cada paciente apegados a una estructura ética que asegure la confidencialidad, resguardando tanto los datos del paciente como también la historia a través del relato.</p>
      <h2>¿Qué es lo que se hace en sesión?</h2>
      <p>Cada proceso terapéutico será ajustado a las necesidades subjetivas de cada personas, esto permite al profesional generar objetivos junto al paciente que faciliten el avance y desarrollo de problema, enfocados en la gestión emocional, la conducta, el desarrollo cognitivo y potenciando las interacciones sociales (familia, amistades, ambiente laboral, etc)</p>
      <p>Modalidades disponibles: Presencial en la comuna de  Maipú / Online</p>
      <h2>¿Qué es lo que puedo atender en el Centro IDV?</h2>
      <br></br>
      <ul>
        <li>Neuro-divergecias</li>
        <li>Problemas de autoestima</li>
        <li>Herramientas facilitadoras para el mejoramiento de la salud mental</li>
        <li>Trastornos de Ansiedad</li>
        <li>Trastornos depresivos </li>
        <li>Duelo</li>
        <li>Estrés</li>
        <li>Autoconocimiento</li>
        <li>Dificultades en Relaciones interpersonales</li>
        <li>Interacciones Sociales</li>
        <li>Interacciones Familiares</li>
        <li>Habilidades parentales</li>
      </ul>
      </Content>
      <AgendaSection />
      <br /><br /><br />
    </div>
  )
}
