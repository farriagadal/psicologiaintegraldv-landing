import styled from 'styled-components'

export const Container = styled.div`
  width: var(--content-width);
  margin: auto;
  color: #000;
  padding-top: 10px;
  padding-bottom: 72px;

  @media only screen and (max-width: 765px) {
    width: calc(100% - 40px);
    margin: auto;
  }

  h1, h2 {
    font-size: 35px;
    line-height: 100%;
    margin-bottom: 10px;
    margin-top: 50px;
  }

  b p {
    color: white;
    font-weight: 700;
  }

  p.resume {
    font-size: 23px;
  }

  p {
    color: #7E888D;
    font-weight: 400;
    font-size: 21px;
  }

  ul {
    background: var(--color-8);
    border-radius: 30px 0px;
    padding: 60px;
    margin: 18px -60px 18px -60px;
    list-style-type: none;
    position: relative;

    @media only screen and (max-width: 765px) {
      margin: 40px 0;
      padding: 30px;
    }


    li {
      font-family: 'Nunito';
      font-weight: 700;
      font-size: 18px;
      line-height: 160%;
      letter-spacing: 0.04em;
      color: var(--color-3);
      margin-bottom: 34px;
      padding-left: 60px;

      @media only screen and (max-width: 765px) {
        padding-left: 50px;
      }

      &:before {
        content:  url('/icons/check-icon.svg');
        position: absolute;
        left: 60px;
        margin-top: 6px;

        @media only screen and (max-width: 765px) {
          left: 30px;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

    }
  }
`