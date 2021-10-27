import Header from './Header';
import {FC} from 'react';
import MainWrapper from './MainWrapper';
import styled from 'styled-components';
import {breakPoints} from '../constants';

const Main = styled.main`
  padding: calc(50px) 0px;

  @media (max-width: ${breakPoints.xs}) {
    padding: calc(10px) 0px;
  }
`;

const MainLayout: FC = ({children}) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Main>{children}</Main>
      </MainWrapper>
    </>
  );
};

export default MainLayout;
