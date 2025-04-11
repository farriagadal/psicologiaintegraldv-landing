import { Container, Text, Email } from './styles'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Container>
      {/* <img src="/footer.svg" alt="footer" /> */}
      <Text>
        <p><b>PSICOLOGIAINTEGRALDV.CL</b>© {t('copyright')} { new Date().getFullYear() }</p>
        <Email>
          <a href="mailto:capsidelvinculo@gmail.com">capsidelvinculo@gmail.com</a>
        </Email>
      </Text>
    </Container>

  )
}

export default Footer
