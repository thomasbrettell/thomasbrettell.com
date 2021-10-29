import type {NextPage} from 'next';
import Head from 'next/head';
import {Text, Link, Divider, Card} from '@geist-ui/react';
import {Tabs, TabButton, TabContainer} from '../components/CustomTabGroup';
import {useState} from 'react';
import styled from 'styled-components';
import AspectRatio from '../components/AspectRatio';
import Image from 'next/image';
import FlowerImage from '../assets/marguerite-729510__340.jpeg';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  height: 100%;
  position: relative;
  overflow: hidden;
  gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(9, 1fr);
  }
`;

const SkillContainer = styled.div``;

const SkillItem = styled.div``;

const fakeArray = [1, 2, 3, 4, 5];

const About: NextPage = () => {
  const [tabValue, setTabValue] = useState('Frontend');

  return (
    <>
      <Head>
        <title>About | Tom Brettell Portfolio</title>
        <meta name='description' content='About me!' />
      </Head>
      <Text h1>About me</Text>
      <Text p>
        Developer with a degree in{' '}
        <Link
          color
          target='_blank'
          href='https://www.sydney.edu.au/courses/courses/uc/bachelor-of-design-computing.html'
        >
          Design Computing
        </Link>
        .
      </Text>
      <Text p>
        In the world of developing I have an affinity for React/Next.js. In the
        world of design my interests lie with Design Systems.
      </Text>
      <Divider my='30px' />
      <Text h3>Skills</Text>
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
          <Grid>
            {fakeArray.map((el) => (
              <div key={el}>
                <AspectRatio>
                  <Image
                    src={FlowerImage}
                    alt={`${el}`}
                    layout='fill'
                    objectFit='cover'
                  />
                </AspectRatio>
              </div>
            ))}
            {/* {tabValue === 'Frontend' && <>Frontend</>}
            {tabValue === 'Backend' && <>Backend</>}
            {tabValue === 'Design' && <>Design</>} */}
          </Grid>
        </Card.Content>
      </TabContainer>
    </>
  );
};

export default About;
