import { Container, Text, BackButton, BgImg } from './styles'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Button } from 'src/styled-components/Button'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useState } from 'react'
import { CONSTANTS } from 'src/utils/constants'
import { useRouter } from 'next/router'

type MiniHeaderProps = {
  title: string,
  imgUrl?: string,
}

const MiniHeader = ({ title, imgUrl='/images/bg.jpg' }: MiniHeaderProps) => {
  const { t } = useTranslation()
  const [imageId, setImageId] = useState(0)
  const router = useRouter()

  return (
    <>
      <Container>
        <BgImg src={imgUrl} alt="Centro Psicológico Fondo" />
        <Text>
          <BackButton onClick={() => router.push('/')}><img src='/icons/back-arrow.svg' /> Volver
          </BackButton>
          <h1>{title}</h1>
          <p>Psicoterapia especializada para  todas las edades, adaptada a las necesidades emocionales de cada etapa</p>
        </Text>
      </Container>
    </>

  )
}

export default MiniHeader