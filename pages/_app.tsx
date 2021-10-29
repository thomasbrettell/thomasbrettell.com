import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {FC} from 'react';
import {NextPage} from 'next';
import {GeistProvider, CssBaseline} from '@geist-ui/react';
import MainLayout from '../components/MainLayout';
import Head from 'next/head';
import {useState} from 'react';

type Page<P = {}> = NextPage<P> & {
  layout?: FC;
};

type Props = AppProps & {
  Component: Page;
};

function MyApp({Component, pageProps}: Props) {
  const Layout = Component.layout || MainLayout;
  const [themeType, setThemeType] = useState('light');
  const switchThemes = () => {
    setThemeType((last) => (last === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GeistProvider>
    </>
  );
}

export default MyApp;
