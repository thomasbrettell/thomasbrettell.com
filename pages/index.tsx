import Head from 'next/head';
import Name from '../components/Name';
import NavButton from '../components/NavButton';
import Grid from '../components/Grid';
import NoLayout from '../components/NoLayout';

const Home = () => {
  return (
    <>
      <Head>
        <title>Tom Brettell Portfolio</title>
        <meta
          name='description'
          content="My portfolio!"
        />
      </Head>
      <Grid>
        <Name>
          Tom
          <br />
          Brettell
        </Name>
        <NavButton href='/work'>WORK</NavButton>
        <NavButton href='/about' noBorder>ABOUT</NavButton>
        <NavButton href='/contact' noBorder>CONTACT</NavButton>
        <NavButton href='/snippets'>SNIPPETS</NavButton>
      </Grid>
    </>
  );
};

Home.layout = NoLayout;

export default Home;
