import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: var(--color-black-dark);
  & > * {
    flex-grow: 1;
  }
`;

export const CartItemImage = styled.div`
  max-width: 92px;
  overflow: hidden;
  background-color: var(--color-black-middle);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    padding: 0 8px;
  }
`;
export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CartItemName = styled.div`
  padding: 24px;
  font-family: var(--font-primary), sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  color: var(--color-body);
  flex-grow: 1;
  display: block;
  align-items: center;
`;

export const PriceGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 260px;
`;

export const CartCounter = styled.div`
  display: flex;
  align-items: center;
`;

export const CartItemTotal = styled.div`
  max-width: 135px;
  width: 100%;
  text-align: right;
  font-family: var(--font-primary), sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: var(--color-yellow);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

// @media all and (max-width: 767px) {
//   .cart-item-container {
//     align-items: unset;
//   }

//   .price-group {
//     width: 100%;
//   }

//   .cart-item-info {
//     flex-direction: column;
//     padding: 16px 24px;
//   }

//   .cart-item-name {
//     padding: 0 0 16px;
//     font-size: 18px;
//   }

//   .cart-item-total {
//     padding: 0 0 0 16px;
//   }

//   .cart-item-image {
//     max-width: 120px;
//   }
// }
