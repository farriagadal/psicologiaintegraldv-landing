
import { useTranslation } from 'react-i18next'
import FAQS from 'src/components/FAQS'
import MiniHeader from 'src/components/MiniHeader'

const FAQSPage = () => {

  const questions = [
    {
      title: '¿Atienden a través de FONASA?',
      content: 'Si, según sea el profesional por el cual será atendido.'
    },
    {
      title: '¿Puedo reembolsar en mi Isapre o seguro médico?',
      content: 'Si, entregamos boletas que son reembolsables, además completamos formularios de seguro complementario (que debe traer el o la paciente).'
    },
    {
      title: '¿Puedo solicitar certificados o informes psicológicos?',
      content: 'Si, el profesional a cargo puede gestionar la entrega de ambos documentos y será entregado al paciente únicamente de forma presencial en la sesión que corresponda. En el caso de necesitar informe psicológico el o la paciente podrá solicitarlo en la sexta sesión, y tendrá el valor del arancel de una sesión según la prestación. Cabe destacar que el centro emite informes solo en caso de ser necesarios y no será contemplado como objetivo en la terapia.'
    },
    {
      title: '¿Cómo agendar una cita?',
      content: 'En nuestra página encontrarás el botón “agenda con nosotros” y serás re dirigid@ al WhatsApp del centro, en donde podrás elegir al profesional con quien quieres ser atendid@ y la modalidad.'
    },
    {
      title: '¿En qué modalidad atienden?',
      content: 'Tenemos atención presencial y modalidad online, sin embargo, la modalidad online está disponible para adolescentes, adultos y terapia de parejas.'
    },
    {
      title: '¿Qué necesito para ser atendido en modalidad online?',
      content: 'Como centro estamos comprometidos con la privacidad y la confidencialidad del paciente, por ende, solicitamos que en la modalidad online el paciente se asegure de tener audífonos, un lugar seguro y privado para mantener el resguardo de la información y contar con una seña de internet óptimo para evitar problemas en la comunicación, sin embargo, entendemos que a veces no es posible tener todas las condiciones solicitadas por lo que también nos vamos adaptando según la necesidad y contexto.'
    },
    {
      title: '¿Debo pagar anticipado?',
      content: 'Si, sin embargo el pago anticipado que se solicita es del 15% sobre el valor de la sesión, esto es con la intención de asegurar su visita y que el profesional no pierda la hora reservada. En caso de necesitar anular la hora, el o la paciente tendrá la posibilidad de solicitar su anulación con una anticipación de 24 horas y se le hará el reembolso de la reserva, en el caso de que la anulación exceda las 24 horas permitidas se hará la retención del 15%.'
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
  
  return (
    <>
      <MiniHeader
        title="Preguntas Frecuentes"
      />
      <FAQS questions={questions} hideTitle />
    </>
  )
}

export default FAQSPage 