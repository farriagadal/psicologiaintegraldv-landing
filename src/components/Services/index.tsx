import { useEffect, useState } from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import CardService from '../CardService'
import { Container, SplideContainer } from './styles'

const Services = () => {
  const [isShow, setIsShow] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const cards = [
    {
      img: '/icons/services/salud-mental.png',
      title: 'Psicología adulto',
      url: '/servicios/psicologia-adulto',
      description: 'Acompañamos tu proceso personal con total confidencialidad y un enfoque ético sólido. Junto a ti, establecemos objetivos claros para gestionar emociones, conductas y relaciones.',
      delay: 0
    },
    {
      img: '/icons/services/temor.png',
      title: 'Psicología infantil juvenil',
      url: '/servicios/psicologia-infanto-juvenil',
      description: 'Para niños y adolescentes, el juego y el diálogo son claves para comprender su mundo emocional y social. Trabajamos de la mano con la familia y, si es necesario, con la escuela.',
      delay: 1
    },
    {
      img: '/icons/services/familia.png',
      title: 'Terapia de Parejas',
      url: '/servicios/terapia-de-parejas',
      description: 'Ser pareja implica compartir sueños... y conflictos. Ofrecemos un espacio seguro para abordar distanciamiento, problemas de comunicación, infidelidad, entre otros.',
      delay: 0.5
    },
    {
      img: '/icons/services/secundario.png',
      title: 'Talleres Grupales y Charlas',
      url: '/servicios/talleres-grupales-y-charlas',
      description: 'Porque nadie es una isla, creamos espacios colectivos para aprender, compartir y fortalecer herramientas frente a desafíos individuales, familiares o de pareja.',
      delay: 1
    },
    {
      img: '/icons/services/familia.png',
      title: 'Terapia de familias',
      url: '/servicios/terapia-de-familias',
      description: 'La familia es la base de nuestras primeras relaciones. Intervenimos ante crisis, conflictos o cambios importantes, con algunos o todos los miembros, para restablecer la armonía.',
      delay: 0.5
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio === 1) {
          setIsShow(true)
        }
      },
      { threshold: 1 }
    )
    const section = document.querySelector('#Services')
    if (section) observer.observe(section)

    // Limpieza del observer en caso de que el componente se desmonte:
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div id="services" onMouseEnter={() => setIsHover(true)}>
      <Container isActive={isShow || isHover}>
        <label>Servicios</label>
        <h2>Nuestros Servicios</h2>

        <div style={{ position: 'relative' }}>
          <SplideContainer />
          <Splide
            options={{
              type: 'loop',
              pagination: true,
              gap: '1rem',
              autoplay: true,
              fixedWidth: 350,
              arrows: false,
              breakpoints: {
                768: {
                  perPage: 2
                },
                480: {
                  perPage: 1,
                  fixedWidth: '99%'
                }
              }
            }}
            aria-label="Nuestros Servicios"
            style={{ marginBottom: '2rem' }}
          >
            {cards.map((card, index) => (
              <SplideSlide key={index}>
                <CardService {...card} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </Container>
    </div>
  )
}

export default Services
