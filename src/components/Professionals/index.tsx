import React, { useState, useEffect, MouseEvent } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
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
        <h2>Más información de {professional.name}</h2>
        {professional.html}
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
      image: '/images/michel.png',
      shortDescription: <>
        Fundador del centro psicológico integral, coordinador y supervisor del área clínica familiar.
      </>,
      html: <>
        Descripción completa de Michel:
        experiencia, logros, estudios, especialidades y cualquier detalle extra que desees.
      </>
    },
    {
      id: 2,
      name: 'Ps. Javiera Vásquez González',
      image: '/images/javiera.jpg',
      shortDescription: <>Coordinadora y supervisora del área clínica infanto-juvenil.</>,
      html: <>
      Información detallada de la experiencia y especialidades de Javiera,
      su formación académica y otros datos importantes.
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
      <Row>
        {professionalsData.map((prof) => (
          <PhotoBox key={prof.id}>
            <ImgBox>
              <Image src={prof.image} alt={prof.name} fill style={{objectFit:"cover"}}/>
            </ImgBox>
            <p>{prof.name}</p>
            <label>{prof.shortDescription}</label>
            <br />
            <Button onClick={() => openModal(prof)}>Ver más</Button>
          </PhotoBox>
        ))}
      </Row>

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
