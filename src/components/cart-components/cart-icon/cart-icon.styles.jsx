import styled, { css } from 'styled-components';
import cartSvg from '../../../assets/images/icons/cart-icon.svg';

export const CartIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  width: 57px;
  height: 63px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s ease;
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      top: 50px;
      z-index: 3;
      right: 10px;
      left: ${(props) => props.leftIndent};
    `}

  @media (max-width: 600px) {
    width: 47px;
    height: 53px;
  }
`;

export const ShoppingIcon = styled.div`
  background: url('${cartSvg}');
  background-size: cover;
  position: relative;
  width: 90%;
  height: 90%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 3px;
`;

export const ItemsCount = styled.span`
  font-size: 22px;
  line-height: 1.1;
  font-weight: 900;
  color: var(--color-pink);
  margin-top: 14px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const ItemsPrice = styled.span`
  font-size: 11px;
  line-height: 1.1;
  font-weight: 500;
  color: var(--color-black);
  margin: 0;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
