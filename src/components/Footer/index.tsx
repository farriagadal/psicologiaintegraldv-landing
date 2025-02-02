import { Container, Text } from './styles'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Container>
      {/* <img src="/footer.svg" alt="footer" /> */}
      <Text>
        <p>Fluai.io © Versión Beta 0.1 - {t('copyright')} { new Date().getFullYear() }</p>
      </Text>
    </Container>

  )
}

export default Footer
