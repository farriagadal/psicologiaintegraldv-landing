import { Container, Phone, Text, Section, InputBox, Wrapper } from './styles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'src/styled-components/Button'
import axios from 'axios'

const OurValues = () => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (email === '') {
      window.gtag('event', 'email_empty', {
        event_category: email,
        value: email
      })
      alert(t('error1'))
      return
    }
    if (!email.includes('@') || !email.includes('.')) {
      window.gtag('event', 'email_invalid', {
        event_category: email,
        value: email
      })
      alert(t('error1'))
      return
    }
    window.gtag('event', 'send_email')
    axios.post('https://api.fluai.io/emails/subscribe', { email }, )
    .then(() => {
      setEmail('')
      alert('Thank you for subscribing!')
    })
  }

  return (
    <Section id="version">
      <Container>
        <Wrapper>
          <Phone>
            <img className='shadow' src="/images/phone1.png" alt="phone shadow animation" />
            <img className='image' src="/images/phone1.png" alt="phone animation" />
          </Phone>
        </Wrapper>
        <Text>
          <label>{t('version_label')}</label>
          <h2>{t('version_title')}</h2>
          <p>{t('version_desc')}</p>
          <InputBox>
            <input
              value={email}
              type="email"
              placeholder={t('version_placeholder') ?? ''}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button width='250px' onClick={handleSubmit}>
              {t('version_button')}
            </Button>   
          </InputBox>
        </Text>
      </Container>
    </Section>

  )
}

export default OurValues