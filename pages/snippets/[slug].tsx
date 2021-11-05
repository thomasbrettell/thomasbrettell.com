import snippets from '../../snippets';
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import { Text, useMediaQuery } from '@geist-ui/react';
import { CopyBlock, codepen } from 'react-code-blocks';
import Head from 'next/head';
import test from '../../sketches/test';
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
  overflow: hidden;
  display: inline-flex;
  border-radius: 9999px;
`;

const FlushedCode = styled.div`
  code {
    font-family: monospace !important;

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

  const code = `class HelloMessage extends React.Component {
    handlePress = () => {
      alert('Hello')
    }
    render() {
      return (
        <div>
          <p>Hello {this.props.name}</p>
          <button onClick={this.handlePress}>
            Say Hello
          </button>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Taylor" />, 
    mountNode 
  );`;

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
      <Block>
        <P5jsComponent sketch={test} />
      </Block>
      <Block>
        <FlushedCode>
          <CopyBlock
            text={code}
            language={'jsx'}
            showLineNumbers={true}
            theme={codepen}
            wrapLines={false}
            codeBlock
          />
        </FlushedCode>
      </Block>
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
