import styled from 'styled-components';
export const Image = styled.img`
  /* width: 100%;*/
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
    cursor: zoom-in;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
