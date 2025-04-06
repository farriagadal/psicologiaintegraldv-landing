import styled from 'styled-components'


export const Container = styled.div`
  text-align: center;
  background: linear-gradient(134.06deg,#5a7577 22.76%,#716448 97.51%);
  margin-bottom: 30px;
  border-radius: 20px;
  padding: 30px;
  border: solid 1px #5cdbc9cc;

  * {
    color: #fff;
  }

  label {
    display: block;
    cursor: pointer;
    width: 100%;

    @media only screen and (max-width: 1250px) {
      display: flex;
      text-align: left;
      align-items: center;
      // wrap
      /* flex-wrap: wrap; */
    }

    span {
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 700;
      font-family: 'Poppins';
      padding-right: 10px;


      @media only screen and (max-width: 1250px) {
        font-size: 18px;
      }
    }

    img {
      transform: translateY(3px) scale(1.2);
      margin-left: 10px;

      @media only screen and (max-width: 1250px) {
        margin-left: auto;
      }
    }
  }

  &>div {
    margin-top: 30px;
    border-top: solid 1px var(--color-3);
    padding: 50px 50px;
    font-size: 22px;
    animation: fade 0.5s ease-in-out;

    @media only screen and (max-width: 1250px) {
      padding: 30px 0px;
      font-size: 20px;
      line-height: 1.3;
      
    }


    @keyframes fade {
      from {
        /* transform: translateY(-10px); */
        opacity: 0;
      }
      to {
        /* transform: translateY(0); */
        opacity: 1;
      }
    }
  }
`