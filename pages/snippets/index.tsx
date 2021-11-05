import type { NextPage } from 'next';
import Head from 'next/head';
import { Text, Divider, Card, Avatar } from '@geist-ui/react';
import styled from 'styled-components';
import snippets from '../../snippets';
import Link from 'next/link';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.div`
  border-radius: 9999px;
  overflow: hidden;
  display: inline-flex;
  height: 32px;
  width: 32px;
`;

const Snippets: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sketches | Tom Brettell Portfolio</title>
        <meta name='description' content='My processing sketches!' />
      </Head>
      <Text h1>My Snippets</Text>
      <Text p>
        A bunch of code snippets that I&apos;ve written, liked and decided to
        save.
      </Text>
      <Divider mb='20px' />
      <Grid>
        {snippets.map((snippet) => (
          <Link key={snippet.slug} href={`/snippets/${snippet.slug}`} passHref>
            <a>
              <Card>
                <CardContent>
                  <div style={{ display: 'inline-flex' }}>
                    <Icon>
                      <snippet.icon />
                    </Icon>
                  </div>
                  <Text mt='12px' mb='0' b h3>
                    {snippet.title}
                  </Text>
                  <Text mt='2px' mb='0' small>
                    {snippet.description}
                  </Text>
                </CardContent>
              </Card>
            </a>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default Snippets;
