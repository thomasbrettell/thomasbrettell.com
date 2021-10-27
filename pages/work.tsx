import type {NextPage} from 'next';
import {Text, Description} from '@geist-ui/react';
import Head from 'next/head';
import styled from 'styled-components';
import {work, breakPoints} from '../constants';
import Link from 'next/link';

const Aspect = styled.div`
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const ImageCard = styled.div`
  background: #fff;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  border-radius: 5px;
  box-shadow: none;
  box-sizing: border-box;
  color: #000;
  background-color: #fff;
  border: 1px solid #eaeaea;
  width: 100%;
  height: auto;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  position: relative;
  overflow: hidden;
`;

const GridItemContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Title = styled.span`
  white-space: normal;
`;

const Grid = styled.div`
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  gap: 20px;

  @media (max-width: ${breakPoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${breakPoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakPoints.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Work: NextPage = () => {
  return (
    <>
      <Head>
        <title>Work | Tom Brettell Portfolio</title>
        <meta name='description' content='See my work!' />
      </Head>
      <Text h1>My Work</Text>
      <Grid>
        {work.map((el, index) => (
          <Link key={index} href={el.link ? el.link : ''} passHref>
            <a target='_blank'>
              <GridItemContainer>
                <Description title={<Title>{el.name}</Title>} />
                <ImageCard>
                  <Image src={el.image} />
                  <Aspect />
                </ImageCard>
              </GridItemContainer>
            </a>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default Work;
