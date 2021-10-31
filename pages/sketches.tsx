import type {NextPage} from 'next';
import Head from 'next/head';
import {Text, Divider} from '@geist-ui/react';

const Sketches: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sketches | Tom Brettell Portfolio</title>
        <meta name='description' content='My processing sketches!' />
      </Head>
      <Text h1>My Sketches</Text>
      <Text p>
        My progress as I learn computer graphics and generative art.
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
