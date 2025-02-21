import styled from 'styled-components'


export const Container = styled.div`
  width: var(--container-width);
  margin: auto;
  margin-top: 100px;
  padding-bottom: 100px;

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

    @media only screen and (max-width: 1250px) {
      text-align: left;
    }

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
    max-width: 700px;
    margin: 34px auto 70px auto;

    @media only screen and (max-width: 1250px) {
      text-align: left;
    }

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

export const PhotoBox = styled.div`
  display: grid;
`

export const ImgBox = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
`

export const Row = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
`