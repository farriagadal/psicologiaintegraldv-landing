import { Container, Text, ArrowDown } from './styles'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Button } from 'src/styled-components/Button'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useState } from 'react'
import { CONSTANTS } from 'src/utils/constants'

const Heading = () => {
  const { t } = useTranslation()
  const [imageId, setImageId] = useState(0)

  const handleClick = () => {
    window.gtag('event', 'try_now', {
      event_category: 'engagement',
      event_label: `device: ${window.innerWidth} x ${window.innerHeight}`,
      value: `device: ${window.innerWidth} x ${window.innerHeight}`,
    })
    window.location.href = 'https://app.fluai.io'
  }

  return (
    <>
      <Container>
        <Image src='/images/bg.jpg' alt="Seedlab Fondo" fill />
        <Text>
          <label>Michel reyes</label>
          <h1>Psicología a tu alcance</h1>
          <p>Psicoterapia especializada para  todas las edades, adaptada a las necesidades emocionales de cada etapa</p>
          <Button
            width='280px'
            height='60px'
            onClick={() => window.open(CONSTANTS.WZP_URL_REDIRECT, '_blank')}
          >
            <span>Agenda una sessión</span>
            <img src='/icons/whatsapp.svg' alt="Button Main" />
          </Button>
        </Text>
      </Container>
      <ArrowDown href="/#ourvalue" id="ourvalue" > 
        <Image src='/icons/arrow-down.svg' alt="Arrow Down" fill />
      </ArrowDown>
    </>

  )
}

export default Heading