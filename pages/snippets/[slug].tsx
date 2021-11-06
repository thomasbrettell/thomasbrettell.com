import snippets from '../../snippets';
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import { Text, useMediaQuery } from '@geist-ui/react';
import { CopyBlock, dracula } from 'react-code-blocks';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const P5jsComponent = dynamic(() => import('../../components/P5Sketch'), {
  ssr: false,
});

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Icon = styled.div`
  display: inline-flex;
`;

const FlushedCode = styled.div`
  code {
    font-family: monospace !important;
    white-space: pre;

    &:after {
      display: none;
    }

    &:before {
      display: none;
    }
  }
`;

const Block = styled.div`
  margin: 30px 0;
`;

const SnippetPage = ({
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const snippetData = snippets.find((snippet) => snippet.slug === slug);
  const isXs = useMediaQuery('xs');

  if (!snippetData) {
    return <>Loading...</>;
  }

  return (
    <>
      <Head>
        <title>{snippetData.title} | Tom Brettell Portfolio</title>
      </Head>
      <Flex>
        <div>
          <Text h1={!isXs} h3={isXs}>
            {snippetData.title}
          </Text>
          <Text b>{snippetData.description}</Text>
        </div>
        <Icon>
          <snippetData.icon />
        </Icon>
      </Flex>
      {snippetData.sketchId && (
        <Block>
          <P5jsComponent sketchId={snippetData.sketchId} />
        </Block>
      )}
      {snippetData.code && (
        <Block>
          <FlushedCode>
            <CopyBlock
              text={snippetData.code}
              language={'jsx'}
              showLineNumbers={true}
              theme={dracula}
              codeBlock
            />
          </FlushedCode>
        </Block>
      )}
    </>
  );
};

export default SnippetPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = snippets.map((snippet) => ({
    params: { slug: snippet.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const data = snippets.find((snippet) => snippet.slug === slug);

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      slug: data.slug,
    },
  };
};
