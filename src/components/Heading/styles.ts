import styled from 'styled-components'

export const Container = styled.div`
  color: var(--black);
  display: flex;
  position: relative;
  max-width: var(--container-width);
  margin: 155px auto 130px auto;


  @media only screen and (max-width: 1250px) {
    flex-direction: column;
    margin: 100px auto 100px auto;
  }


  label {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-2);
    margin-bottom: 10px;
    display: block;
  }

  img {
    @media only screen and (max-width: 1250px) {
      position: absolute;
      transform: scale(1.3);
      opacity: 0.1;
    }
  }

`
export const Text = styled.div`
  position: relative;
  width: 50%;
  padding-right: 50px;
  z-index: 1;

  @media only screen and (max-width: 1250px) {
    width: 100%;
    padding-right: 0px;
    margin-bottom: 50px;

    button {
      width: 100%;
      margin-top: 30px;
    }
  }

  h1 {
    margin: 0;

    @media only screen and (max-width: 1250px) {
      font-size: 40px;
    }
  }

  p {
    margin-top: 20px;
    font-weight: 400;
    font-size: 26px;
    line-height: 1.2;
    opacity: 0.8;

    @media only screen and (max-width: 1250px) {
      font-size: 20px;
    }
  }
`

export const ArrowDown = styled.a`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  margin: 0 auto 120px auto;
  display: block;

  img {
    filter: brightness(0);
    animation: updown infinite 2s ease-in-out;
  }

  @media only screen and (max-width: 1250px) {
    margin-bottom: 80px;
  }

  @keyframes updown {
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
`