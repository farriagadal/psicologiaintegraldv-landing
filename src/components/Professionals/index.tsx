import React, { useState, useEffect, MouseEvent } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Button } from 'src/styled-components/Button'
import { CloseButton, Container, ImgBox, ModalContainer, Overlay, PhotoBox, Row } from './styles'

// ================== Tipos e interfaces ==================
interface Professional {
  id: number
  name: string
  image: string
  shortDescription: any
  html: any
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  professional: Professional | null
}

interface ProfessionalsProps {
  // Si tu componente recibe props desde el padre, define su interfaz aquí
  // Por ahora, no recibe ninguna
}

// Estilos adicionales para mejorar la apariencia
const ProfessionalName = styled.h3`
  font-size: 1.4rem;
  margin: 1rem 0 0.5rem;
  color: #2c3e50;
  font-weight: 600;
  text-align: center;
  line-height: 134%;
`;

const ProfessionalDescription = styled.div`
  font-size: 0.95rem;
  color: #555;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 1.2rem;
  min-height: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalTitle = styled.h2`
  color: #2c3e50;
  border-bottom: 2px solid var(--color-8);
  padding-bottom: 0.8rem;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

const ModalContent = styled.div`
  p {
    margin-bottom: 1.2rem;
    line-height: 1.7;
    color: #444;
    font-size: 1.05rem;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const StyledButton = styled(Button)`
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

// ================== Modal Component ==================
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, professional }) => {
  // Control interno para montar/desmontar el modal
  const [shouldMount, setShouldMount] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen) {
      // Si se abre, se monta de inmediato
      setShouldMount(true)
    } else {
      // Si se cierra, esperamos la duración de la transición (0.3s)
      const timer = setTimeout(() => {
        setShouldMount(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Si no debemos montar, no renderizamos nada
  if (!shouldMount) return null

  // Si no hay profesional seleccionado, retornamos null
  if (!professional) return null

  // Manejo del clic en el overlay para cerrar
  const handleOverlayClick = () => {
    onClose()
  }

  // Evitar que clic dentro del contenedor cierre el modal
  const handleModalContainerClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <Overlay isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalContainer isOpen={isOpen} onClick={handleModalContainerClick}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <ModalTitle style={{marginBottom: 20}}>{professional.name}</ModalTitle>
        <ModalContent>
          {professional.html}
        </ModalContent>
      </ModalContainer>
    </Overlay>
  )
}

// ================== Main Component ==================
const Professionals: React.FC<ProfessionalsProps> = () => {
  // Datos "dinámicos" de cada profesional
  const professionalsData: Professional[] = [
    {
      id: 1,
      name: 'Mg. © Ps. Michel Reyes González',
      image: '/images/michel.jpeg',
      shortDescription: <>
        Fundador del centro psicológico integral del vínculo.<br/>
        Director general, coordinador y supervisor del área clínica familiar.
      </>,
      html: <>
        <p>Michel Reyes González, Licenciado en Psicología, Magíster © en Psicología clínica mención Sistémica, 
        aprobado en su grado con máxima distinción, certificado en diferentes áreas de aplicación clínica, 
        entre ellas en la administración de la Escala Wechsler de inteligencia en niños, quinta edición (WISC-V), 
        primeros auxilios psicológicos y Terapia Breve.</p>
        
        <p>En la actualidad se encuentra centrado en la especialización terapia familiar, adolescente, 
        adultos y terapia de parejas. En su trabajo con adultos, parejas y terapia familiar se destaca 
        por el uso de técnicas de terapia sistémica familiar, terapia breve centrada en soluciones, 
        narrativa y terapia estratégica.</p>
      </>
    },
    {
      id: 2,
      name: 'Ps. Javiera Vásquez González',
      image: '/images/javiera.jpg',
      shortDescription: <>Coordinadora y supervisora del área clínica infanto-juvenil.</>,
      html: <>
        <p>Javiera Vásquez González, psicóloga clínica especializada en el tratamiento de niños, 
        adolescentes y adultos. Como coordinadora y supervisora del área infanto-juvenil se destaca 
        por el uso de técnicas de juego y terapia lúdica para fomentar el crecimiento emocional y cognitivo.</p>
        
        <p>Su trabajo en estrecha colaboración con los padres y cuidadores asegura el bienestar de todo 
        el sistema familiar. En cuanto al enfoque con adultos, busca brindar un espacio de reflexión y 
        crecimiento personal, facilitando la exploración de pensamientos, emociones y comportamientos 
        de manera segura y confidencial.</p>
      </>
    }
    // Agrega más objetos si hay más profesionales
  ]

  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = (professional: Professional) => {
    setSelectedProfessional(professional)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Container id="profesionales">
      <label>Profesionales</label>
      <h2>Nuestros Psicólogos</h2>
      <Splide
        options={{
          pagination: true,
          gap: '1rem',
          autoplay: true,
          arrows: false,
          perPage: 3,
          breakpoints: {
            1000: {
              perPage: 1
            }
          }
        }}
      >
        {professionalsData.map((prof) => (
          <SplideSlide key={prof.id}>
            <PhotoBox>
              <ImgBox>
                <img src={prof.image} alt={prof.name} style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}/>
              </ImgBox>
              <ProfessionalName>{prof.name}</ProfessionalName>
              <ProfessionalDescription>{prof.shortDescription}</ProfessionalDescription>
              <StyledButton onClick={() => openModal(prof)}>Ver más</StyledButton>
            </PhotoBox>
          </SplideSlide>
        ))}
      </Splide>

      {/* Modal único para todos los profesionales */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        professional={selectedProfessional}
      />
    </Container>
  )
}

export default Professionals
