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
          content="This is Thomas Brettell's portfolio"
        />
      </Head>
      <Grid>
        <Name>
          Tom
          <br />
          Brettell
        </Name>
        <NavButton href='/work'>WORK</NavButton>
        <NavButton href='/about'>ABOUT</NavButton>
        <NavButton href='/contact'>CONTACT</NavButton>
        <NavButton href='/sketches'>SKETCHES</NavButton>
      </Grid>
    </>
  );
};

Home.layout = NoLayout;

export default Home;
