import { useState, useEffect } from 'react'
import { Container } from './styles'
import { useTranslation } from 'react-i18next'

const Extract = () => {
  const { t } = useTranslation()
  const [isShow, setIsShow] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      // setIsShow(entries[0].intersectionRatio === 1)
      if (entries[0].intersectionRatio === 1) {
        setIsShow(true)
      }
    }, { threshold: 1 })
    observer.observe(document.querySelector('#ourvalue'))
  }, [])

  return (
    <Container isActive={isShow || isHover}>
      <div id="ourvalue" onMouseEnter={() => setIsHover(true)} />
      <p dangerouslySetInnerHTML={{ __html: t('resume') }} />
    </Container>
  )
}

export default Extract