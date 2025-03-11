import Link from 'next/link'
import { Logo, MenuButton, MenuList, ContactBtn, CloseBtn, LangBtn, Container } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { Button } from 'src/styled-components/Button'

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
        <Image src='/icons/logo/logo-horizontal-black.svg' alt="Logo" width={170} height={70} />
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

            <a href="https://app.fluai.io">
              <Button>
              <span style={{fontSize: 12, whiteSpace: 'nowrap'}}>Agenda una sessión</span>
              <img src='/icons/whatsapp.svg' alt="Button Main" />
              </Button>
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