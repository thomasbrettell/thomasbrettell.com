import type {NextPage} from 'next';
import Head from 'next/head';
import {Text, Link} from '@geist-ui/react';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Tom Brettell Portfolio</title>
        <meta name='description' content='About me!' />
      </Head>
      <Text h1>About me</Text>
      <Text p>Developer with a degree in <Link color target='_blank' href='https://www.sydney.edu.au/courses/courses/uc/bachelor-of-design-computing.html'>Design Computing</Link>.</Text>
      <Text p>In the world of developing I have an affinity for React/Next.js with noSQL DBs. In the world of design my interests lie with Design Systems.</Text>
    </>
  );
};

export default About;
