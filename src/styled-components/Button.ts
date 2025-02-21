import styled from 'styled-components'

type ButtonProps = {
  width?: string
  disabled?: boolean
  height?: string
}

export const Button = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: var(--color-1); */
  border-radius: 8px;
  border: 1px white solid;
  color: rgb(255, 255, 255);
  font-weight: 900;
  font-size: 17px;
  padding: 12px 24px;
  width: ${props => props.width ? `${props.width}` : 'fit-content'};
  height: ${props => props.height ? `${props.height}` : 'fit-content'};
  pointer-events: ${props => props.disabled ? 'none' : 'initial'};
  cursor: pointer;
  transition: filter 0.2s;
  opacity: ${props => props.disabled ? '0.7' : '1'};
  background: linear-gradient(134.06deg, #5a7577 22.76%, #716448 97.51%);
  text-transform: uppercase;

  &:hover {
    filter: brightness(0.6);
  }

  &:active {
    filter: brightness(0.8);
  }

  img {
    margin-left: 8px;
    height: 20px
  }

  span {
    color: rgb(255, 255, 255);
  }
`
