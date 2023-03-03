import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  height: var(--card-height);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 0.2s all;
  cursor: pointer;
`;

export const CardTop = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--color-black-middle);

  img {
    max-width: calc(100% - 50px);
    width: 100%;

    @media (max-width: 480px) {
      max-width: calc(70% - 60px);
    }
  }

  &:hover {
    background-color: #4e4d41;
  }
`;

export const ProductCaption = styled.div`
  height: 65px;
  background-color: var(--color-black-dark);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #3b3a31;
  }

  @media (max-width: 480px) {
    height: 60px;
  }
`;

export const ProductName = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  font-style: italic;
  line-height: 1.2;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ProductPrice = styled.div`
  position: absolute;
  right: 0;
  bottom: 65px;
  display: inline-block;
  padding: 8px;
  min-width: 72px;
  text-align: center;
  background-color: var(--color-pink);
  color: var(--color-body);
  font-family: var(--font-primary), sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;

  @media (max-width: 480px) {
    bottom: 60px;
  }
`;

export const ProductPriceCarousel = styled(ProductPrice)`
  bottom: 100px;
  max-width: 72px;
`;
