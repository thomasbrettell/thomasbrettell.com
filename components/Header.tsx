import {FC, useState} from 'react';
import styled from 'styled-components';
import {Tabs, Text, useMediaQuery, Button, Link} from '@geist-ui/react';
import MainWrapper from './MainWrapper';
import {useRouter} from 'next/dist/client/router';
import Menu from '@geist-ui/react-icons/menu';
import {breakPoints} from '../constants';
import MobileMenuModal from './MobileMenuModal';
import {pages} from '../constants';

const Box = styled.header`
  position: fixed;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
  padding: 10px 0 0 0;

  h6 {
    margin: 0;
  }

  &:after {
    position: absolute;
    content: '';
    height: 1px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgb(234, 234, 234);
  }

  @media (max-width: ${breakPoints.xs}) {
    padding: 10px 0;
  }
`;

const Nav = styled.nav`
  margin-top: 5px;

  .content {
    display: none;
  }
`;

const Flex = styled.div`
  @media (max-width: ${breakPoints.xs}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const isXS = useMediaQuery('xs');
  const router = useRouter();

  const closeHandler = () => {
    setOpenModal(false);
  };

  const openHandler = () => {
    setOpenModal(true);
  };

  const tabChangeHandler = (value: string) => {
    router.push(value);
  };

  console.log(isXS);

  return (
    <>
      <MobileMenuModal state={openModal} closeHandler={closeHandler} />
      <Box>
        <MainWrapper>
          <Flex>
            <Text h6={!isXS} span={isXS}>
              <Link href='/'>Thomas Brettell</Link>
            </Text>

            {isXS && (
              <Button
                iconRight={<Menu />}
                auto
                onClick={openHandler}
                type='abort'
              />
            )}
            {!isXS && (
              <Nav>
                <Tabs value={router.route} onChange={tabChangeHandler}>
                  {pages.map((page) => (
                    <Tabs.Item
                      key={page.name}
                      label={page.name}
                      value={page.link}
                    />
                  ))}
                </Tabs>
              </Nav>
            )}
          </Flex>
        </MainWrapper>
      </Box>
    </>
  );
};

export default Header;
