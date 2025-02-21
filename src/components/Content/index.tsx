import Link from 'next/link'
import { Container, BtnContact } from './styles'
import React from 'react'

type ContentProps = {
  children: any
}

const Content = ({ children }: ContentProps) => {
  return (
    <>
      <Container id="content">
        {children}
      </Container>
    </>
  )
}

export default Content