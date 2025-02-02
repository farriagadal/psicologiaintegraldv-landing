
import Collapse from '../Collapse'
import { Container } from './styles'
import { useTranslation } from 'react-i18next'

const FAQS = () => {
  const { t } = useTranslation()

  const questions = [
    {
      title: t('faq1title'),
      content:  t('faq1content')
    },
    {
      title: t('faq2title'),
      content:  t('faq2content')
    },
    {
      title: t('faq3title'),
      content:  t('faq3content')
    },
    {
      title: t('faq4title'),
      content:  t('faq4content')
    },
    {
      title: t('faq5title'),
      content:  t('faq5content')
    },
    {
      title: t('faq6title'),
      content:  t('faq6content')
    },
    {
      title: t('faq7title'),
      content:  t('faq7content')
    }
  ]

  return (
    <Container id="faqs">
      <label>{t('faq_label')}</label>
      <h2>{t('faq_title')}</h2>
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
    </Container>
  )
}

export default FAQS