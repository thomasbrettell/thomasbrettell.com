import type {NextPage} from 'next';
import Head from 'next/head';
import {Text, Link, Divider, Card, Code, useMediaQuery} from '@geist-ui/react';
import {Tabs, TabButton, TabContainer} from '../components/CustomTabGroup';
import {useState} from 'react';
import styled, {css} from 'styled-components';
import {frontend, backend, design} from '../skills';

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
  margin-right: 25px;
  margin-bottom: 25px;
  position: relative;
`;

const About: NextPage = () => {
  const [tabValue, setTabValue] = useState('Frontend');
  const isXs = useMediaQuery('xs');

  return (
    <>
      <Head>
        <title>About | Tom Brettell Portfolio</title>
        <meta name='description' content='About me!' />
      </Head>
      <Text h1>About me</Text>
      <Text p>
        I&apos;m a 21 year old Developer/UI Designer with a degree in{' '}
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
        <Text type='success' span i>
          design
        </Text>{' '}
        my interests lie with Design Systems.
      </Text>
      <Divider my='30px' />
      <Text h3>Skills</Text>
      {!isXs && (
        <>
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
        </>
      )}
      {isXs && (
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
          <Card.Content style={{backgroundColor: 'white'}}>
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
      )}
    </>
  );
};

export default About;
