import styled from 'styled-components'
import Link from 'next/link'

type ContainerProps = {
  isTop: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-top: ${props => props.isTop ? '60px' : '0'};
  position: ${props => props.isTop ? 'sticky' : 'fixed'};
  top: 0;
  z-index: 111;
  background: #f5f1e9;
  box-shadow: ${props => props.isTop ? 'none' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px'};
  transition: all 0.2s ease-in-out;
  width: 100%;

  nav {
    align-items: flex-end;
    max-width: var(--container-width);
    margin: auto;
    display: flex;
    align-items: center;
    height: 60px;

    .full-logo {
      animation: 0.3s appear-logo linear;
      display: ${props => props.isTop ? 'block' : 'none'};
      font-size: 35px;
    }
  
    .short-logo {
      /* position: absolute; */
      animation: 0.2s appear-logo linear;
      /* left: 47px;
      top: 15px; */
      line-height: 100%;
      margin: auto;
      display: ${props => props.isTop ? 'none' : 'block'};

      span {
        font-size: 28px;
        padding: 2px 10px;
        border-radius: 13px 0;
        margin-right: 7px;
      }
    }

    @keyframes appear-logo {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

/* 
  &:hover {
    background: ${props => props.isTop ? 'var(--color-1)' : 'var(--color-8)'};
  } */
`
export const Logo = styled(Link)`
  margin-right: auto;

  img {
    width: auto;
    max-height: 66px;
  }
  .short-logo {
    max-height: 42px;
  }
`

export const MenuOption = styled.div`
  font-family: 'Poppins';
  color: var(--black);
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.1em;
  margin-left: 76px;
`

export const ContactBtn = styled.div`
  background: linear-gradient(134.06deg, #5a7577 22.76%, #716448 97.51%);
  border-radius: 8px;
  padding: 0 30px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  transform: rotate(-90deg);
  z-index: 1111;
  position: fixed;
  bottom: 30vh;
  right: -80px;

  img {
    filter: brightness(0) invert(1);
  }

  &:hover {
    background: var(--color-8);
  }

  span {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    text-transform: uppercase;
    color: var(--color-3);
  }

  img {
    margin-right: 18px;
    transform: rotate(90deg);
    transition: all 0.2s;
  }
`

export const LangBtn = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  cursor: pointer;
  img {
    width: 25px;
  }
`
