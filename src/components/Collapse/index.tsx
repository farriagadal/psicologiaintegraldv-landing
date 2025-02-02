import React, { useEffect, useState } from 'react'
import { Container } from './styles'

type CollapseProps = {
  initOpen?: boolean
  title: string
  children: React.ReactNode
  onClick?: () => void
}

const Collapse = ({ title, children, initOpen, onClick }: CollapseProps) => {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (!initOpen) {
      setTimeout(() => {
        setOpen(false)
      }, 1000)
    }
  }, [initOpen])

  return (
    <Container onClick={onClick}>
      <label  onClick={() => setOpen(!open)} >
        <span>{title}</span>
        <img src="/icons/arrow-down.svg" alt="arrow-down" />
      </label>
      {open && <div>{children}</div>}
    </Container>
  )
}

export default Collapse