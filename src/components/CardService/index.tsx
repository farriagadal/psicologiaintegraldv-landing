import { Button } from 'src/styled-components/Button'
import { Container, Title, IconContainer } from './styles'
import { useRouter } from 'next/router'

type CardServiceProps = {
  Icon?: any,
  title: string,
  img?: string,
  description: string,
  delay?: number,
  url: string
}

const CardService = ({ img, Icon, title, description, delay, url }: CardServiceProps) => {
  const router = useRouter()

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
      <Button onClick={() => router.push(url)}>Ver más</Button>
      
    </Container>
  )
}

export default CardService