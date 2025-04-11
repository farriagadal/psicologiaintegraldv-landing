import styled from 'styled-components'

export const Container = styled.div`
  /* background: #27248C; */
  height: 160px;
  grid-row-end: none;
  position: relative;
  overflow: hidden;

  background: url('/images/footer.svg');
  background-size: cover;
  background-position: top center;

  @media only screen and (max-width: 1250px) {
    margin-left: -20px;
    margin-right: -20px;
  }
`

export const Text = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 40px;
  
  p {
    margin: auto;
    text-align: center;
    font-size: 16px;
    font-weight: 100;
    font-family: 'Poppins';
    opacity: 0.9;
  }
`

export const Email = styled.div`
  margin-top: 10px;
  text-align: center;

  a {
    text-decoration: none;
    font-size: 16px;
    font-family: 'Poppins';
    opacity: 0.9;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
`
