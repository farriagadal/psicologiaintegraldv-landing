import Link from 'next/link'
import { Container, Logo, MenuOption, ContactBtn, LangBtn } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

type NavDesktopProps = {
  routes: {
    name: string
    href: string
    external?: boolean
  }[]
  langs: {
    code: string
    src: string
  }[]
}

const NavDesktop = ({ routes, langs }: NavDesktopProps) => {
  const { t } = useTranslation()
  const [isTop, setIsTop] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      setIsTop(entries[0].intersectionRatio === 1)
    }, { threshold: [0,1] })

    observer.observe(document.querySelector('#NavDesktopindicator'))
  }, [])

  return (
    <>
      <div id="NavDesktopindicator" />
      <Container isTop={isTop}>
        <nav>
          <Logo href="/">
            <Image className='full-logo' src='/icons/logo.svg' alt="Logo" width={200} height={100} />
            <Image className='short-logo' src='/icons/short-logo.svg' alt="Logo" width={100} height={50} />
          </Logo>
          {
            routes.map((route, index) => (
              <MenuOption key={index}>
                {
                  route.external && router.pathname === '/'
                    ? <a href={ route.href }>{ route.name }</a>
                    : <Link href={ route.href }>{ route.name }</Link>
                }
              </MenuOption>
            ))
          }
          {
            langs.map((lang: any, index) => (
              <LangBtn
                key={index}
                onClick={() => {
                  i18n.changeLanguage(lang.code)
                }}
              >
                <img src={lang.src} alt={lang.code} />
              </LangBtn>
            ))
          }
        </nav>
      </Container>
      <a href="https://app.fluai.io">
        <ContactBtn>
          <Image src='/icons/contact-icon.svg' alt="Contact Icon" width={16} height={16} />
          <span>{t('cta2')}</span>
        </ContactBtn>
      </a>
    </>
  )
}

export default NavDesktop

