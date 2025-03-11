import styled from 'styled-components'


export const Container = styled.div`
  width: var(--container-width);
  margin: auto;
  margin-top: 100px;
  position: relative;

  @media only screen and (max-width: 1250px) {
    width: auto;
  }

  &>label {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-8);
    text-align: center;
    display: block;

    &:after {
      content: '';
      left: calc(50vw + 120px);
      width: calc(50vw - 50px);
      border-bottom: solid 1px;
      margin-top: 10px;
      position: absolute;
      opacity: 0.3;

      @media only screen and (max-width: 1250px) {
        text-align: left;
        left: initial;
        width: calc(100vw);
        margin-left: 15px;
      }
    }
  }


  h2  {
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.04em;
    max-width: 600px;
    margin: 34px auto 70px auto;

    &::after {
      content: '.';
      color: var(--color-8);
    }
  }

  p {
    @media only screen and (max-width: 1250px) {
      margin-top: 0;
      margin-bottom: 40px;
    } 
  }

  .splide__list {
    justify-content: center;
    @media only screen and (max-width: 1250px) {
      justify-content: initial;
    } 
  }

  .splide__pagination {
    bottom: -50px;
  }

  .splide__pagination__page {
    border-radius: 0;
    width: 30px;
    height: 5px;
    margin: 4px;
    &.is-active {
      background-color: var(--color-8);
      margin: 6px;
    }
  }
`

export const Row = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
`


export const PhotoBox = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  justify-items: center;
  box-shadow: rgba(149,157,165,0.5) 0px 8px 15px;
  border-radius: 20px;
  border: 1px solid #5a7577;
  padding: 29px;
  // width: 100%;

  button {
    margin-top: 1rem;
    background-color: #0070f3;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #005bb5;
  }

  p {
    font-family: 'Poppins';
    font-size: 22px;
  }
  
  label {
    color: black;
    font-weight: 600;
    opacity: 0.7;
  }
`

export const ImgBox = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 50%;
`

// Overlay con transición de opacidad
export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /* Transición de opacidad */
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

// Contenedor del contenido del modal con transición de escala o translate
export const ModalContainer = styled.div<{ isOpen: boolean }>`
  background-color: #fff;
  padding: 50px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  position: relative;

  /* Animación de entrada/salida */
  transform: ${(props) => (props.isOpen ? 'scale(1)' : 'scale(0.95)')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`