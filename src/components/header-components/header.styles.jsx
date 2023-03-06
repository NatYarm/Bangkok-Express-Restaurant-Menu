import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 988px;
  margin: 0 auto;
  padding-top: 50px;
  position: relative;
`;

export const Heading = styled.h1`
  font-size: 46px;
  line-height: 1.2;
  color: #ecd41a;
  text-shadow: 3px 3px #c92086;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Sriracha', sans-serif;

  @media (max-width: 600px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Subheading = styled.h3`
  font-size: 22px;
  font-style: italic;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  color: #b6b4a2;
  padding-bottom: 36px;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
