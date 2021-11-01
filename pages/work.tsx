import type { NextPage } from 'next';
import { Text, Description, Divider, Tag, useToasts } from '@geist-ui/react';
import Head from 'next/head';
import styled from 'styled-components';
import { breakPoints } from '../constants';
import work from '../work';
import Image from 'next/image';

const Aspect = styled.div`
  &:after {
    content: '';
    display: block;
    padding-bottom: 56.25%;
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
  margin-top: 10px;
`;

const GridItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

const Title = styled.span`
  white-space: normal;
`;

const Grid = styled.div`
  grid-template-columns: repeat(1, 1fr);
  display: grid;
  gap: 20px;
`;

const A = styled.a`
  margin-top: 25px;
`;

const ComingSoonOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(250, 250, 250);
  opacity: 0.5;
  z-index: 1;
`;

const Center = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Work: NextPage = () => {
  const [, setToast] = useToasts();

  const toastHandler = () => {
    setToast({ text: 'Not publically available.', type: 'warning' });
  };

  return (
    <>
      <Head>
        <title>Work | Tom Brettell Portfolio</title>
        <meta name='description' content='See my work!' />
      </Head>
      <Text h1>My Work</Text>
      <Text p>Some of the projects I have done and worked on.</Text>
      <Divider />
      <Grid>
        {work.map((el, index) => (
          <A
            target='_blank'
            key={index}
            href={el.link ? el.link : undefined}
            onClick={el.notPublic ? toastHandler : undefined}
          >
            <GridItemContainer>
              <Description
                title={<Title>{el.name}</Title>}
                content={el.description}
              />
              <ImageCard>
                {el.comingSoon && (
                  <>
                    <ComingSoonOverlay />
                    <Center>
                      <Tag invert>Coming Soon</Tag>
                    </Center>
                  </>
                )}
                <Image
                  src={el.image}
                  alt={el.name}
                  layout='fill'
                  objectFit='cover'
                />
                <Aspect />
              </ImageCard>
            </GridItemContainer>
          </A>
        ))}
      </Grid>
    </>
  );
};

export default Work;
