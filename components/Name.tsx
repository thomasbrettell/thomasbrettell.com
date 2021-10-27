import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100px;
  width: 100px;
  background: black;
  color: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default Container;
