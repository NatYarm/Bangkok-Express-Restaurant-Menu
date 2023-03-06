import styled from 'styled-components';

export const CheckoutForm = styled.form`
  padding: 20px 27px 32px;
  background-color: var(--color-black-dark);
`;

export const FormTitle = styled.h5`
  font-size: 21px;
  line-height: 1.2;
  font-weight: 700;
  font-family: var(--font-primary), sans-serif;
  font-style: italic;
  color: var(--color-body);
  margin: 0 0 25px;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-top: 16px;
`;

export const ErrorMsg = styled.span`
  color: red;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  font-size: 12px;
  position: absolute;
`;

export const FormInput = styled.input`
  height: 48px;
  border: none;
  box-shadow: none;
  outline: none;
  background-color: var(--color-white);
  padding: 11px 16px;
  color: var(--color-black);
  font-family: var(--font-primary), sans-serif;
  font-style: italic;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  width: 100%;
  transition: 0.2s box-shadow;
  position: relative;
`;

export const FormButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 80px 0;
  text-align: center;
`;

export const FormButton = styled.div`
  height: 60px;
  padding: 18px 14px;
  background-color: var(--color-yellow);
  font-family: 'Lato', sans-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 18px;
  color: var(--color-black);
  display: flex;
  justify-content: center;
  transition: 0.2s all;
  text-transform: uppercase;
  cursor: pointer;
`;

export const FormButtonInfo = styled.div`
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-body);
  font-family: var(--font-primary), sans-serif;
  background-color: var(--color-pink);
`;
export const InfoText = styled.span`
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
`;

export const InfoPrice = styled.span`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;
`;

// export const FormGroupRow = styled.div`
//  display: grid;
// grid-template-columns: repeat(3, 1fr);
// grid-gap: 6px;
// `;
