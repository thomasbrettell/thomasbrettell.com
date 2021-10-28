import type {NextPage} from 'next';
import Head from 'next/head';
import {Text, Divider} from '@geist-ui/react';

const Sketches: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Tom Brettell Portfolio</title>
        <meta name='description' content='My processing sketches!' />
      </Head>
      <Text h1>My Sketches</Text>
      <Text p>
        I have recently become quiet interesting in the world of computer
        graphics and generative art so Ive decided to document my progress
        here.
      </Text>
      <Text p>
        The sketches below were written in the JavaScript version of Processing,
        P5.js.
      </Text>
      <Divider />
    </>
  );
};

export default Sketches;
