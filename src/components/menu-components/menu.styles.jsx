import styled from 'styled-components';

export const MenuContainer = styled.div`
  max-width: 988px;
  margin: 0 auto;

  h2 {
    font-family: var(--font-secondary), sans-serif;
    font-size: 36px;
    line-height: 1.2;
    font-weight: 400;
    color: #ecd41a;
    text-shadow: 3px 3px #c92086;
    margin: 20px 0 20px;
    text-transform: uppercase;

    @media (max-width: 600px) {
      font-size: 30px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const Filters = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px 34px;
  display: flex;
  align-items: center;
  border: 2px solid #6e6a51;
  margin-bottom: 24px;
  color: #b6b4a2;

  @media (max-width: 600px) {
    height: 100px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`;

export const FiltersInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SliderGroup = styled.div`
  display: inline-flex;

  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const SliderLabel = styled.label`
  font-size: 13.5px;
  line-height: 1.2;
  font-family: 'Lato';
  align-self: center;
  margin-right: 40px;

  @media (max-width: 900px) {
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-self: flex-start;
    margin-right: 20px;
    font-size: 12px;
  }
`;
