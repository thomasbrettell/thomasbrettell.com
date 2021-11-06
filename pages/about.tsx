import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Text,
  Link,
  Divider,
  Card,
  Code,
  useMediaQuery,
  Tag,
} from '@geist-ui/react';
import NextLink from 'next/link';
import { Tabs, TabButton, TabContainer } from '../components/CustomTabGroup';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { frontend, backend, design } from '../skills';
import { breakPoints } from '../constants';
import dynamic from 'next/dynamic';
const P5jsComponent = dynamic(() => import('../components/P5Sketch'), {
  ssr: false,
});
interface SkillContainerProps {
  spaced?: boolean;
}

const SkillContainer = styled.div<SkillContainerProps>`
  display: flex;
  flex-wrap: wrap;

  ${(props) =>
    props.spaced &&
    css`
      justify-content: space-evenly;
    `}
`;

const SkillItem = styled.div`
  width: 80px;
  height: 85px;
  display: flex;
  text-align: center;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  margin-right: 24px;
  margin-bottom: 24px;
  position: relative;
`;

const Desktop = styled.div`
  @media (max-width: ${breakPoints.xs}) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;

  @media (max-width: ${breakPoints.xs}) {
    display: block;
  }
`;

const About: NextPage = () => {
  const [tabValue, setTabValue] = useState('Frontend');
  const isXs = useMediaQuery('xs');
  const [gamePoints, setGamePoints] = useState(0);

  const pointIncreaseHandler = () => {
    setGamePoints(gamePoints + 1);
  };

  return (
    <>
      <Head>
        <title>About | Tom Brettell Portfolio</title>
        <meta name='description' content='About me!' />
      </Head>
      <Text h1>About me</Text>
      <Text p>
        Developer/UI Designer with a degree in{' '}
        <Link
          color
          target='_blank'
          href='https://www.sydney.edu.au/courses/courses/uc/bachelor-of-design-computing.html'
        >
          Design Computing
        </Link>{' '}
        from the University of Sydney.
      </Text>
      <Text p>
        In the world of <Code>developing</Code> I have an affinity for
        React/Next.js.
        <br />
        In the world of{' '}
        <Text type='error' span i>
          design
        </Text>{' '}
        my interests lie with Design Systems.
      </Text>
      {!isXs && (
        <>
          <Text mb='10px' mt='25px' font='14px'>
            Here is a &quot;fun&quot; little game that you can play if you want.{' '}
            <br />
            Use the <Code>arrow keys</Code> to move the ship and fly it into the
            dot for a point.
            <br />
            <Text small>
              You can see more of this kind of thing on the{' '}
              <NextLink href='/snippets'>
                <Link color>Snippets page</Link>
              </NextLink>
              .
            </Text>
          </Text>
          <Tag mt='20px' mb='5px'>Points: {gamePoints}</Tag>
          <P5jsComponent
            sketchId={'pilot-game'}
            onPoint={pointIncreaseHandler}
          />
        </>
      )}
      <Divider my='30px' />
      <Text h3>Skills</Text>
      <Desktop>
        <Text h5>Frontend</Text>
        <SkillContainer>
          {frontend.map((el) => (
            <SkillItem key={el.name}>
              <el.icon />
              <span>{el.name}</span>
            </SkillItem>
          ))}
        </SkillContainer>
        <Divider mb='20px' />
        <Text h5>Design</Text>
        <SkillContainer>
          {design.map((el) => (
            <SkillItem key={el.name}>
              <el.icon />
              <span>{el.name}</span>
            </SkillItem>
          ))}
        </SkillContainer>
        <Divider mb='20px' />
        <Text h5>Backend</Text>
        <SkillContainer>
          {backend.map((el) => (
            <SkillItem key={el.name}>
              <el.icon />
              <span>{el.name}</span>
            </SkillItem>
          ))}
        </SkillContainer>
      </Desktop>
      <Mobile>
        <TabContainer>
          <Tabs>
            <TabButton
              selected={tabValue === 'Frontend'}
              onClick={() => setTabValue('Frontend')}
              tabIndex={tabValue === 'Frontend' ? -1 : undefined}
            >
              <Text small>Frontend</Text>
            </TabButton>
            <TabButton
              selected={tabValue === 'Design'}
              onClick={() => setTabValue('Design')}
              tabIndex={tabValue === 'Design' ? -1 : undefined}
            >
              <Text small>Design</Text>
            </TabButton>
            <TabButton
              selected={tabValue === 'Backend'}
              onClick={() => setTabValue('Backend')}
              tabIndex={tabValue === 'Backend' ? -1 : undefined}
            >
              <Text small>Backend</Text>
            </TabButton>
          </Tabs>
          <Card.Content style={{ backgroundColor: 'white' }}>
            <SkillContainer spaced>
              {tabValue === 'Frontend' &&
                frontend.map((el) => (
                  <SkillItem key={el.name}>
                    <el.icon />
                    <span>{el.name}</span>
                  </SkillItem>
                ))}
              {tabValue === 'Backend' &&
                backend.map((el) => (
                  <SkillItem key={el.name}>
                    <el.icon />
                    <span>{el.name}</span>
                  </SkillItem>
                ))}
              {tabValue === 'Design' &&
                design.map((el) => (
                  <SkillItem key={el.name}>
                    <el.icon />
                    <span>{el.name}</span>
                  </SkillItem>
                ))}
            </SkillContainer>
          </Card.Content>
        </TabContainer>
      </Mobile>
    </>
  );
};

export default About;
