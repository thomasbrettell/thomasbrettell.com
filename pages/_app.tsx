import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {FC} from 'react';
import {NextPage} from 'next';
import {GeistProvider, CssBaseline} from '@geist-ui/react';
import MainLayout from '../components/MainLayout';
import Head from 'next/head';

type Page<P = {}> = NextPage<P> & {
  layout?: FC;
};

type Props = AppProps & {
  Component: Page;
};

function MyApp({Component, pageProps}: Props) {
  const Layout = Component.layout || MainLayout;

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GeistProvider>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GeistProvider>
    </>
  );
}

export default MyApp;
