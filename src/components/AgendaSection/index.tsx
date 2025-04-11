import { Button } from 'src/styled-components/Button'
import { Container, PhotoBox, ImgBox, Row } from './styles'
import Image from 'next/image'
import { CONSTANTS } from 'src/utils/constants'

const AgendaSection = () => {

  return (
    <Container>
      <label>Agendar cita</label>
      <h2>Agenda una sesión con nosotros</h2>
      <Row>
        <Button
          width='280px'
          height='60px'
          onClick={() => window.open(CONSTANTS.WZP_URL_REDIRECT, '_blank')}
        >
          <span>Agenda una sesión</span>
          <img src='/icons/whatsapp.svg' alt="Button Main" />
        </Button>
      </Row>
    </Container>
  )
}

export default AgendaSection