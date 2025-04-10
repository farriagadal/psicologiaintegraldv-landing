import FAQS from 'src/components/FAQS'
import Heading from 'src/components/Heading'
import Services from 'src/components/Services'
import Professionals from 'src/components/Professionals'
import AgendaSection from 'src/components/AgendaSection'
import Head from 'next/head'

const questions = [
  {
    title: '¿Atienden a través de FONASA?',
    content: 'Si, según sea el profesional por el cual será atendido.'
  },
  {
    title: '¿En qué modalidad atienden?',
    content: 'Tenemos atención presencial y modalidad online, sin embargo, la modalidad online está disponible para adolescentes, adultos y terapia de parejas.'
  },
  {
    title: '¿Cuáles son las formas de pago?',
    content: 'Las formas de pago son transferencia, efectivo, tarjeta débito, tarjeta crédito y billetera electrónica.'
  },
  {
    title: 'Valores de servicios',
    content: `	
      Psicología Online Adulto: 30.000 <br />
      Psicología Online Infanto-Juvenil: 30.000 <br />
      Psicología Presencial Adulto: 35.000 <br />
      Psicologia Presencia Infanto-Juvenil: 35.000 <br />
      Terapia de Parejas: 40.000 <br />
      Terapia Familiar: 40.000 <br />
    `
  }
];
  
export default function Home() {
  return (
    <>
      <Head>
        <title>CAPSI | Centro de Atención Psicológica del Vínculo - Inicio</title>
        <meta name="description" content="Centro de atención psicológica especializado en terapia individual, parejas y familiar. Acompañamiento profesional personalizado." />
      </Head>
      <main>
        <section id="inicio" aria-label="Sección principal">
          <Heading />
        </section>
        
        <section id="servicios" aria-label="Nuestros servicios">
          <h2 className="visually-hidden">Nuestros Servicios</h2>
          <Services />
        </section>
        
        <section id="preguntas-frecuentes" aria-label="Preguntas frecuentes">
          <h2 className="visually-hidden">Preguntas Frecuentes</h2>
          <FAQS questions={questions} />
        </section>
        
        <section id="profesionales" aria-label="Nuestros profesionales">
          <h2 className="visually-hidden">Equipo Profesional</h2>
          <Professionals />
        </section>
        
        <section id="agenda" aria-label="Agenda tu hora">
          <h2 className="visually-hidden">Agenda tu Hora</h2>
          <AgendaSection />
        </section>
      </main>
    </>
  )
}
