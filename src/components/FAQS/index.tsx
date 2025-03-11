
import { url } from 'inspector'
import router from 'next/router'
import { Button } from 'src/styled-components/Button'
import Collapse from '../Collapse'
import { Container } from './styles'
import { useTranslation } from 'react-i18next'

const FAQS = ({ questions, hideTitle }: { questions: any[], hideTitle?: boolean }) => {
  const { t } = useTranslation()

  return (
    <Container id="faqs">
      {!hideTitle && <label>{t('faq_label')}</label>}
      {!hideTitle && <h2>{t('faq_title')}</h2>}
      { questions.map((question, index) => (
        <Collapse
          key={index}
          title={question.title}
          initOpen={index === 0}
          onClick={() => {
            window.gtag('event', 'click_faq', {
              event_category: 'engagement',
              event_label: question.title
            })
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: question.content }} />
        </Collapse>
      ))}
      <Button style={{margin: 'auto', marginTop: 70}} onClick={() => router.push('/preguntas-frecuentes')}>
        Más preguntas frecuentes
      </Button>

    </Container>
  )
}

export default FAQS