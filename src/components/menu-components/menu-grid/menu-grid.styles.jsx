import styled from 'styled-components';

export const ProductsGridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, calc(33.3333% - 14px));

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, calc(50% - 14px));
    grid-gap: 22px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;

    grid-gap: 20px;
  }
`;
