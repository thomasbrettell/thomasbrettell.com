import Header from './Header';
import Footer from './Footer';
import {FC} from 'react';
import MainWrapper from './MainWrapper';
import styled from 'styled-components';
import {breakPoints} from '../constants';

const Main = styled.main`
  padding: calc(50px) 0px;
  min-height: calc(100% - 222px);

  @media (max-width: ${breakPoints.xs}) {
    padding: calc(10px) 0px;
    min-height: calc(100% - 135px);
  }
`;

const MainLayout: FC = ({children}) => {
  return (
    <>
      <Header />
      <Main>
        <MainWrapper>{children} </MainWrapper>
      </Main>
      <Footer />
    </>
  );
};

export default MainLayout;
