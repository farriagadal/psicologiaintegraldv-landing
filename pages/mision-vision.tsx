import MiniHeader from 'src/components/MiniHeader'
import AgendaSection from 'src/components/AgendaSection'
import Content from 'src/components/Content'

export default function MisionVisionPage() {
  return (
    <div>
      {/* <Heading /> */}
      <MiniHeader
        title='Sobre Nosotros'
      />
      <Content>
      <p style={{fontSize: 26, lineHeight: '110%'}}>
      El <b>Centro de Atención Psicológica del Vínculo</b> es una red de profesionales <b>independientes</b> especializados en el bienestar emocional de las familias.
      Nos enfocamos en la Psicología Clínica con un abordaje sistémico, ofreciendo psicoterapia para <b>individuos, parejas y familias</b>.
      Nuestro equipo cuenta con una alta capacitación y profesionalismo, sus  intervenciones tienen una visión integral basadas en la evidencia científica cuidando la historia de cada paciente y de cada familia, garantizando un <b>acompañamiento riguroso y especializado</b>.
      </p>  
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
