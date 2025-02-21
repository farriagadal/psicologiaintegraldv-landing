import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  display: flex;
  position: relative;
  margin: 60px auto 60px auto;


  @media only screen and (max-width: 1250px) {
    flex-direction: column;
    margin: 100px auto 100px auto;
  }

  img {
    object-fit: cover;

    @media only screen and (max-width: 1250px) {
      position: absolute;
      transform: scale(1.3);
      opacity: 0.1;
    }
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    animation: opacityless linear 5s;
    opacity: 0.5;
    background: linear-gradient(299deg, #4e422e 0%, #000000 50%);
    z-index: 1;
  }

`
export const BackButton = styled.div`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: white;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Text = styled.div`
  position: relative;
  padding-right: 50px;
  z-index: 11;
  width: var(--container-width);
  margin: auto;
  height: 400px;
  place-content: center;
  text-align: center;
  justify-items: center;

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
    color: #fff;

    @media only screen and (max-width: 1250px) {
      font-size: 40px;
    }
  }

  p {
    color: #e6e6e6;
    max-width: 700px;
    font-weight: 100;
    font-family: 'Nunito';
    font-size: 25px;
    margin-bottom: 0px;
    letter-spacing: 0.8px;

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