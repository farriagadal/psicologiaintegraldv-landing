import styled from 'styled-components'

type ContainerProps = {
  isActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: var(--container-width);
  margin: auto;
  color: white;
  padding: 0px 0 120px 0;
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  transform: ${(props) => (props.isActive ? 'translateY(0px)' : 'translateY(-250px)')};
  transition: all 0.4s linear;
  /* overflow: hidden; */

  @media only screen and (max-width: 1250px) {
    padding: 50px 0px 120px 0;
    opacity: 1;
    transform: translateY(0px);
  }

  &> p {
    text-align: center;
    font-size: 25px;
    max-width: 700px;
    margin: 0 auto 100px auto;
  }

  label {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-2);
    text-align: center;
    display: block;

    @media only screen and (max-width: 1250px) {
      text-align: left;
    }

    &:after {
      content: '';
      left: calc(50% + 120px);
      width: calc(49vw - 120px);
      border-bottom: solid 1px;
      margin-top: 10px;
      position: absolute;
      opacity: 0.3;

      @media only screen and (max-width: 1250px) {
        text-align: left;
        left: initial;
        width: 100vw;
        margin-left: 15px;
      }
    }
  }


  h2  {
    text-align: center;
    letter-spacing: 0.04em;
    margin: 34px auto 70px auto;

    b {
      font-family: inherit;
      color: var(--color-2);
    }

    @media only screen and (max-width: 1250px) {
      text-align: left;
    }

    &::after {
      content: '.';
      color: var(--color-2);
    }
  }

  p {
    @media only screen and (max-width: 1250px) {
      margin-top: 0;
      margin-bottom: 40px;
    } 
  }
`

type ListProps = {
  isActive?: boolean;
}

export const List = styled.div<ListProps>`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 50px;
  row-gap: 30px;
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  transform: ${(props) => (props.isActive ? 'translateY(0px)' : 'translateY(-250px)')};
  transition: all 0.4s linear;

  @media only screen and (max-width: 1250px) {
    grid-template-columns: 1fr;
    opacity: 1;
    transform: translateY(0px);
  }
`