import { useEffect, useState } from 'react'
import NavDesktop from '../NavDesktop'
import NavMobile from '../NavMobile'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation()
  const [isMobile, setIsMobile] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1300)
    setIsReady(true)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1300)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const routes = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/#servicios', external: true },
    { name: 'Sobre Nosotros', href: '/mision-vision', external: true },
    { name: 'FAQs', href: '/preguntas-frecuentes', external: true },
  ]

  const langs = [
    { code: 'es', src: '/images/spain-flag.png' },
    { code: 'en', src: '/images/en-flag.png' },
    { code: 'ko', src: '/images/korean.png' },
  ]

  return (
    <>
      { isMobile && isReady ? <NavMobile routes={routes} /> : <NavDesktop routes={routes} langs={langs} /> }
    </>
  )
}

export default Header
