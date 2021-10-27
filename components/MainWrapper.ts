import styled from 'styled-components';

const Box = styled.div`
  width: calc(100% - 100pt);
  height: auto;
  padding: 0 calc(1.34 * 16px) 0 calc(1.34 * 16px);
  margin: 0 auto 0 auto;
  box-sizing: border-box;

  @media (max-width: 650px) {
    width: 100%;
    padding: 0 calc(1.34 * 8px) 0 calc(1.34 * 8px);
  }
`;

export default Box;
