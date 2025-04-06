import styled from 'styled-components'

type ContainerProps = {
  delay?: number;
}

export const Container = styled.div<ContainerProps>`
  display: block;
  text-align: center;
  padding: 25px;
  border-radius: 20px;
  /* animation: float 3s infinite; */
  /* animation-delay: ${props => props.delay ? props.delay + 's' : '0s'}; */
  border: 1px solid #5a7577;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color:rgb(146, 199, 202);
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(25px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  p {
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.04em;
    color: var(--black);
  }

  h4 {
    color: var(--black);
    &::after {
      content: '.';
      color: var(--color-8);
    }
  }
  button {
    justify-self: center;
  }
`

export const IconContainer = styled.div`
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  padding: 20px;

  img, svg {
    max-height: 100%;
    filter: sepia(1) saturate(0.8);
  }

  svg, path{
    fill: #5a7577;
  }
`


export const Title = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  h4 {
    font-family: 'Poppins';
    font-weight: 800;
    font-size: 26px;
    line-height: 100%;
    margin: 0;

    @media only screen and (max-width: 1250px) {
      margin-bottom: 24px;
    }
  }
`
