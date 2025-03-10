import FAQS from 'src/components/FAQS'
import Heading from 'src/components/Heading'
import Services from 'src/components/Services'
import Professionals from 'src/components/Professionals'
import AgendaSection from 'src/components/AgendaSection'

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
    <div>
      <Heading />
      {/* <Heading2 /> */}
      {/* <Extract /> */}
      <Services />
      <FAQS questions={questions} />  
      <Professionals />
      <AgendaSection />
      <br /><br /><br />
    </div>
  )
}
