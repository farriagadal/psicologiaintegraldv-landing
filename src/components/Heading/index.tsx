import { Container, Text, ArrowDown } from './styles'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Button } from 'src/styled-components/Button'

const Heading = () => {
  const { t } = useTranslation()

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
        <Text>
          <label>FluAi.io</label>
          <h1>{t('head')}</h1>
          <p>{t('desc')}</p>
          <Button
            width='280px'
            height='60px'
            onClick={() => handleClick()}
          >
            {t('cta1')}
          </Button>
        </Text>
        <img src="/icons/ia.svg" alt="Hero" />

      </Container>
      <ArrowDown href="/#ourvalue" id="ourvalue" > 
        <Image src='/icons/arrow-down.svg' alt="Arrow Down" fill />
      </ArrowDown>
    </>

  )
}

export default Heading