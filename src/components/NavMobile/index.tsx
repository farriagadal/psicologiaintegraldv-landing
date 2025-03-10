import Link from 'next/link'
import { Logo, MenuButton, MenuList, ContactBtn, CloseBtn, LangBtn, Container } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

type NavMobileProps = {
  routes: {
    name: string
    href: string
    external?: boolean
  }[]
}

const NavMobile = ({ routes }: NavMobileProps) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [isSpanish, setIsSpanish] = useState(false) // elimina la inicialización del estado isSpanish

  useEffect(() => {
    const currentLanguage = i18n.language
    setIsSpanish(currentLanguage === 'es') // actualiza el estado basado en el idioma detectado
  }, [])

  return (
    <Container>
      <Logo href="/">
        <Image src='/icons/logo.svg' alt="Logo" width={170} height={70} />
      </Logo>
      <MenuButton onClick={() => setOpen(true)}>
        <Image src='/icons/menu-icon.svg' alt="Centro Psicológico Logo" width={29} height={19} />
      </MenuButton>
      {
        open && (
          <MenuList>
            {
              routes.map((route, index) => (
                route.external && router.pathname === '/'
                  ? <a key={index} href={ route.href }>{ route.name }</a>
                  : <Link key={index} href={ route.href }>{ route.name }</Link>
              ))
            }
            <LangBtn onClick={() => {
              const newLang = isSpanish ? 'en' : 'es'
              i18n.changeLanguage(newLang)
              setIsSpanish(!isSpanish)
            }}>
              {isSpanish ? (
                <>{t('lang')} <img src='/images/spain-flag.png' alt="ES Icon" /></>
              ) : (
                <>{t('lang')} <img src='/images/en-flag.png' alt="EN Icon" /></>
              )}
            </LangBtn>
            <a href="https://app.fluai.io">
              <ContactBtn>
              <span>Agenda una sessión</span>
              <img src='/icons/whatsapp.svg' alt="Button Main" />
              </ContactBtn>
            </a>

            <CloseBtn onClick={() => setOpen(false)}>
              <Image src='/icons/close-icon.svg' alt="Close Icon" width={22} height={22} />
            </CloseBtn>
          </MenuList>
        )
      }

    </Container>
  )
}

export default NavMobile