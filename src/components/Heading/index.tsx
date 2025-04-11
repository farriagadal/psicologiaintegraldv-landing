import { Container, Text, ArrowDown, ProgressBarContainer, ProgressBar } from './styles'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Button } from 'src/styled-components/Button'
import { useState, useEffect } from 'react'
import { CONSTANTS } from 'src/utils/constants'
import { BgImg } from '../MiniHeader/styles'

const Heading = () => {
  const { t } = useTranslation()
  const [imageId, setImageId] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  const [key, setKey] = useState(0) // Para reiniciar la animación

  const rotatingTexts = [
    {
      title: "Psicología a tu alcance",
      subtitle: "Psicoterapia especializada para todas las edades, adaptada a las necesidades emocionales de cada etapa"
    },
    {
      title: "Encuentra tu bienestar",
      subtitle: "Acompañamiento profesional para tu desarrollo personal y emocional"
    },
    {
      title: "Transforma tu vida",
      subtitle: "Herramientas y estrategias para alcanzar tu mejor versión"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((current) => (current + 1) % rotatingTexts.length)
      setKey(prev => prev + 1) // Reinicia la animación
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Container>
        <BgImg src='/images/bg-6.jpg' alt="Centro Psicológico Fondo" />
        <Text>
          <label>Centro Psicológico</label>
          <ProgressBarContainer>
            <ProgressBar key={key} />
          </ProgressBarContainer>
          <h1>{rotatingTexts[textIndex].title}</h1>
          <p>{rotatingTexts[textIndex].subtitle}</p>
          <Button
            width='280px'
            height='60px'
            onClick={() => window.open(CONSTANTS.WZP_URL_REDIRECT, '_blank')}
          >
            <span>Agenda una sesión</span>
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