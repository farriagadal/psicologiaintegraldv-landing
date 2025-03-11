import styled from 'styled-components'

export const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  margin-top: 150px;
  color: white;
  padding: 0px 0 30px 0;
  transition: all 0.4s linear;
  /* overflow: hidden; */

  @media only screen and (max-width: 1250px) {
    padding: 50px 0px;
    margin-top: 70px;
    opacity: 1;
    transform: translateY(0px);
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
      left: calc(50vw + 40px);
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
`