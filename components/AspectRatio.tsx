import styled from 'styled-components';
import {FC} from 'react';

const Box = styled.div`
  position: relative;
`;

const Ratio = styled.div`
  padding-bottom: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const AspectRatio: FC = ({children}) => {
  return (
    <Box>
      <Content>{children}</Content>
      <Ratio />
    </Box>
  );
};

export default AspectRatio;
