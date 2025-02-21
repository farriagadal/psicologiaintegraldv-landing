import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.div`
  color: #333;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  color: var(--black);
  font-weight: 400;
  font-size: 14px;
  -webkit-letter-spacing: 0.1em;
  -moz-letter-spacing: 0.1em;
  -ms-letter-spacing: 0.1em;
  letter-spacing: 0.1em;
  margin-left: 76px;

  /* &:hover {
    background-color: #f5f5f5;
  } */
`;

export const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #fff;
  min-width: 220px;
  border-radius: 10px;
  margin-top: 4px;
  z-index: 10;
  overflow: hidden;

  a {
    display: block;
    padding: 8px 16px;
    color: #333;
    text-decoration: none;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;
