import { useEffect, useState } from 'react'
import CardWork from '../CardWork'
import { Container, List } from './styles'
import { useTranslation } from 'react-i18next'

const HowWorks = () => {
  const { t } = useTranslation()
  const [isShow, setIsShow] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const cards = [
    {
      img: '/images/icon1.svg',
      title: t('title_work1'),
      description: t('desc_work1'),
      delay: 0
    },
    {
      img: '/images/icon2.svg',
      title: t('title_work2'),
      description: t('desc_work2'),
      delay: 1
    },
    {
      img: '/images/icon3.svg',
      title: t('title_work3'),
      description: t('desc_work3'),
      delay: 0.5
    }
  ]

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      // setIsShow(entries[0].intersectionRatio === 1)
      if (entries[0].intersectionRatio === 1) {
        setIsShow(true)
      }
    }, { threshold: 1 })
    observer.observe(document.querySelector('#howworks'))
  }, [])

  return (
    <div id="howworks" onMouseEnter={() => setIsHover(true)}>
      <Container isActive={isShow || isHover}>
        <label>{t('work_label')}</label>
        <h2>{t('work_title')}</h2>
        <List isActive={isShow || isHover}>
          {cards.map((card, index) => <CardWork key={index} {...card} />)}
        </List>
      </Container>
    </div>

  )
}

export default HowWorks