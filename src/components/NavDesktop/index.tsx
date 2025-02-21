import Link from 'next/link'
import { Container, Logo, MenuOption, ContactBtn, LangBtn } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Dropdown from '../Dropdown'

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

  const menuOptions = [
    { label: 'Psicología Adulto', href: '/servicios/psicologia-adulto' },
    { label: 'Psicología Infanto-Juvenil', href: '/servicios/psicologia-infanto-juvenil' },
    { label: 'Terapia de Parejas', href: '/servicios/terapia-de-parejas' },
    { label: 'Talleres Grupales y Charlas', href: '/servicios/talleres-grupales-y-charlas' },
    { label: 'Terapia de familias', href: '/servicios/terapia-de-familias' }
  ];

  return (
    <>
      <div id="NavDesktopindicator" />
      <Container isTop={isTop}>
        <nav>
          <Logo href="/">
            <Image className='full-logo' src='/images/logo-75-v4.png' alt="Logo" width={200} height={100} />
            <Image className='short-logo' src='/images/logo-75-v4.png' alt="Logo" width={100} height={50} />
          </Logo>
          {
            routes.map((route, index) => (
              route.href === '/servicios' 
              ? <Dropdown title={route.name} options={menuOptions} />
              : <MenuOption key={index}>
                {
                  route.external && router.pathname === '/'
                    ? <a href={ route.href }>{ route.name }</a>
                    : <Link href={ route.href }>{ route.name }</Link>
                }
              </MenuOption>
            ))
          }
        </nav>
      </Container>
      <a href="https://app.fluai.io">
        <ContactBtn>
          <img src='/icons/whatsapp.svg' alt="Button Main" />
          <span>Agenda una sessión</span>
        </ContactBtn>
      </a>
    </>
  )
}

export default NavDesktop

