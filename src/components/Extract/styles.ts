import styled from 'styled-components'

type ContainerProps = {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  text-align: center;
  background-color: #f3f8ff;
  padding: 110px 0;
  margin-bottom: 120px;

  @media only screen and (max-width: 1250px) {
    padding: 110px 30px;
    margin-bottom: 70px;
    margin-left: -20px;
    margin-right: -20px;
  }

  p {
    margin: 0 auto;
    font-weight: 300;
    line-height: 1.3;
    font-size: 26px;
    max-width: calc(var(--container-width) - 80px);
    letter-spacing: 0.3px;
    transition: all 0.5s linear;
    opacity: ${(props) => (props.isActive ? '1' : '0')};
    transform: ${(props) => (props.isActive ? 'translateY(0px)' : 'translateY(100px)')};

    b {
      color: var(--black);
    }

    @media only screen and (max-width: 1250px) {
      font-size: 20px;
    }
  }
`