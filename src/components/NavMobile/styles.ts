import Link from 'next/link'
import styled from 'styled-components'


export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;
  background: #f5f1e9;
  padding: 5px 20px;
  border-radius: 0 0 10px 0;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 15px;
`

export const Logo = styled(Link)`
  margin-right: auto;
  margin-top: 75px;

  img {
    width: 140px;
  }

`

export const MenuButton = styled.button`
  border-top: 1px solid var(--color-8);
  border-left: 1px solid var(--color-8);
  border-bottom: none;
  border-right: none;
  position: fixed;
  top: 0px;
  right: 0px;
  background: var(--color-8);
  border-radius: 0px 0px 0px 16px;
  width: 60px;
  height: 60px;
  z-index: 11;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(149,157,165,0.5) 0px 8px 15px;

  &:hover {
    filter: brightness(0.7);
  }
`

export const MenuList = styled.div`
  background: var(--color-8);
  width: 275px;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1111;
  display: grid;
  padding: 73px 30px 35px 40px;
  border-bottom-left-radius: 20px;
  border: 1px solid var(--color-8);
  animation: 0.2s slideleft linear;
  box-shadow: rgba(149,157,165,0.5) 0px 8px 15px;

  a {
    margin-bottom: 45px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.1em;
    color: white;
  }

  @keyframes slideleft {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`

export const CloseBtn = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContactBtn = styled.div`
  border: 1px solid var(--color-8);
  border-radius:8px;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-8);
  background: linear-gradient(134.06deg,#27248C 22.76%,#4F1F66 97.51%);

  span {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.1em;
    color: var(--color-3);
    display: block;
    margin-right: 20px;
  }

  img {
    filter: brightness(0) invert(1);
  }

  &:hover {
    background: var(--color-8);
    border-color: var(--color-1);
  }
`

export const LangBtn = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.1em;
  color: white;
  cursor: pointer;
  margin-bottom: 45px;
  img {
    width: 25px;
    margin-left: 10px;
  }
`
