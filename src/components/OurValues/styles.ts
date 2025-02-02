import styled from 'styled-components'


export const Section = styled.div`
  /* background: var(--color-1); */
  background: linear-gradient(134.06deg, #27248C 22.76%, #4F1F66 97.51%);
  display: grid;
  margin-top: 80px;
  padding: 140px 0 160px 0;


  @media only screen and (max-width: 1250px) {
    padding: 140px 10px 100px 10px;
    margin: -20px;
  }
`

export const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  color: var(--color-3);
  display: flex;

  @media only screen and (max-width: 1250px) {
    display: block;
    padding: 0 20px;
  }


`

export const Phone = styled.div`
  width: 100%;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  z-index: 1;

  @media only screen and (max-width: 1250px) {
    position: relative;
    transform: translateY(-20%);
  }

  .image {
    width: 100%;
    position: relative;
    z-index: 1;
    animation: float 3s infinite;
    /* animation-delay: 1s; */
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

  @keyframes float-shadow {
    0% {
      transform: scale(1.05) translate(-10px, 40px);
      filter: brightness(0) blur(10px) opacity(0.4);
    }
    50% {
      transform: scale(1) translate(-10px, 40px);
      filter: brightness(0) blur(5px) opacity(0.5);
    }
    100% {
      transform: scale(1.05) translate(-10px, 40px);
      filter: brightness(0) blur(10px) opacity(0.4);
    }
  }

  .shadow {
    position: absolute;
    width: 100%;
    left: 0;
    filter: brightness(0) blur(10px) opacity(0.4);
    transform: scale(1.05) translate(-20px, 40px);
    z-index: 1;
    animation: float-shadow 3s infinite;
  }
`


export const Wrapper = styled.div`
  position: relative;
  width: calc(50% - 50px);
  min-width: calc(50% - 50px);
  margin-right: auto;
  display: block;

  @media only screen and (max-width: 1250px) {
    width: 100%;
  }
`

export const Text = styled.div`
  margin-left: 20px;
  width: 50%;
  align-self: center;
  margin-bottom: auto;

  * {
    color: white;
  }

  @media only screen and (max-width: 1250px) {
    margin-left: 0px;
    width: 100%;
  }

  label {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-3);

    @media only screen and (max-width: 1250px) {
      /* margin-left: 18px; */
    }

    &:before {
      content: '';
      left: 0;
      width: calc(50% - 20px);
      border-bottom: solid 1px;
      margin-top: 10px;
      position: absolute;
      opacity: 0.3;

      @media only screen and (max-width: 1250px) {
        width: 20px;
      }
    }
  }

  h2 {
    &::after {
      content: '.';
      color: var(--color-3);
    }
  }

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.04em;
    cursor: pointer;
  }
`

export const InputBox = styled.div`
  display: flex;
  margin-top: 40px;

  @media only screen and (max-width: 1250px) {
    display: block;
  }

  input {
    background: #564f9d;
    font-family: 'Poppins';
    /* background: #0c1680; */
    padding: 15px;
    width: 100%;
    border: none;
    border-radius: 10px;
    color: white;
    height: 50px;
    font-size: 16px;

    &::placeholder {
      color: white;
      opacity: 0.6;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    margin-left: 20px;
    border: solid 1px;
    border-color: var(--color-4);

    @media only screen and (max-width: 1250px) {
      width: 100%;
      margin-left: 0px;
      margin-top: 20px;
    }
  }

`
