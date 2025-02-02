import { Container, Title, IconContainer } from './styles'

type CardWorkProps = {
  Icon?: any,
  title: string,
  img?: string,
  description: string,
  delay?: number
}

const CardWork = ({ img, Icon, title, description, delay }: CardWorkProps) => {

  return (
    <Container delay={delay}>
      <IconContainer>
        {Icon && <Icon />}
        {img && <img src={img} alt={title} />}
      </IconContainer>
      <Title>
        <h4>{title}</h4>
      </Title>
      <p>{description}</p>
    </Container>
  )
}

export default CardWork